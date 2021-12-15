import React,{ useState,useEffect} from 'react'
// import {Table, Container, Row, Col, Form} from 'react-bootstrap'


import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {listpaysleep} from '../../action/useraction'
import jsPDF from 'jspdf'
import {useHistory} from 'react-router-dom'
import {saveAs} from 'file-saver'

import {Table, Row, Col, DatePicker, Divider} from 'antd'

import {FilePdfFilled, FilePdfOutlined} from '@ant-design/icons'
const Sheetinfo = () => {
  const dispatch = useDispatch()
  
  
  // let navigate =  useNavigate()
  
  let history = useHistory()    

  const paysleep = useSelector(state => state.payslip)
  
  let {loading, empinfo, error} = paysleep  
  const userlogin = useSelector(state => state.userlogin)  
  let {loading:userloading, userinfo, error:usererror} = userlogin  
  const [pdf, setpdf] = useState('')

  // var sample = [{Name:"a", Age:1}, {Name:"b", Age:2}, {Name:"c", Age:3}];
   let Earned = empinfo.map(function(item){return item.earned_salary});
    let earned_sum = Earned.reduce(add, 0) 
     
    function add(accumulator, a) {
      return accumulator + a;
    } 
    
    

    let tax_deducted = empinfo.map(function(item){return item.tax_deducted});
    let tax_sum = tax_deducted.reduce(addtax, 0) 
     
    function addtax(accumulator, a) {
      return accumulator + a;
    }  
  // console.log(sum)
   
  // console.log(Earned)

  useEffect(() => {
    if(userinfo){
      // && userinfo.ishr
      dispatch(listpaysleep())                    
            
   }
   else {
    history.push('/')
  }
 
  }, [dispatch, userinfo])  
   
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();  
    
    
    today = dd + '/' + mm + '/' + yyyy;
    var pay = 25000
    const getid = (emp)=>{
     

    axios.post('https://payrolapp.herokuapp.com/api/file/createpdf', emp).then(()=>{
    axios.get('https://payrolapp.herokuapp.com/api/file/fetchpdf', {responseType:'blob'}).then((res)=>{
        let pdfblob = new Blob([res.data], {type:'application/pdf'})
        saveAs(pdfblob, 'payslip.pdf')
   
   
      })  
    })  
   
    console.log(emp)
  
  }   
  const handleclick = (emp)=>{
    axios.post('https://payrolapp.herokuapp.com/api/file/createpdf', emp).then(()=>{
      axios.get('https://payrolapp.herokuapp.com/api/file/fetchpdf', {responseType:'blob'}).then((res)=>{
  
        let pdfblob = new Blob([res.data], {type:'application/pdf'})        
          saveAs(pdfblob, 'payslip.pdf')
     
        })  
      })  
      console.log(emp)
    // console.log(employee)
  } 

  let handlemail = (emp)=>{
   
  let email_emp = {
    
    Emp_id: emp.Emp_id,
    Employee_Name: emp.Employee_Name,
    earned_salary: emp.earned_salary,
    net_pay:emp.net_pay,
    tax_deducted:emp.tax_deducted,
    working_day:emp.working_day,
    sendemail:true 
  }  


  console.log(email_emp)
  axios.post('https://payrolapp.herokuapp.com/api/file/createpdf', email_emp).then(()=>{

    alert('email sent')
  }).catch((err)=>{
      console.log(err)
  })    
  }
  const columns = [
    {
      title: 'Employee Name',
      dataIndex: 'Employee_Name',
      key: 'name',
      
      // render: text => <a>{text}</a>,
    },
    
    {
      title: 'Employee ID',
      dataIndex: 'Emp_id',
      key: 'age',
    },
    {
      title: 'Earned Salary',
      dataIndex: 'earned_salary',
      key: 'age',
    
    },
    {
      title: 'Tax Deducted',
      dataIndex: 'tax_deducted',
      key: 'age',
    },
    {
      title: 'Net Pay',
      dataIndex: 'net_pay',
      key: 'age',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'age',
      render:(text, record)=>{
    
    return <div>
      <div onClick={ ()=> handleclick(record)}>{<FilePdfOutlined />}</div>&nbsp;&nbsp;
       <a onClick={()=> handlemail(record)}>send email</a>
        </div>
      }
    },
  ]
  let generatepdf = ()=>{
       let doc = new jsPDF('p', 'pt')
  
       

       doc.text(40, 20, 'default text'+pay)
      //  set font of document
      doc.setFont('courier')
      // doc.setFontType('normal')
      
      
      doc.text(20, 30, 'text with courier font')
      // save pdf
      doc.save('paysleep.pdf')
    
    }    
    return (    
        <div>    
      


      <Row>
      
      <h2>Salary Load Summary</h2>
      <p style={{marginLeft:'auto'}}><strong>Total Salary </strong></p>&nbsp;&nbsp;          
      
      <p><strong>Total Tax </strong></p>
      </Row>
      <Row>
        <p style={{color:'grey'}}>{today}</p>
        <p style={{marginLeft:'auto', color:'grey'}}>{earned_sum}</p>&nbsp;&nbsp;

        <p style={{color:'grey', marginLeft:'18px'}}>{tax_sum}</p>
      </Row>
       <Row>


      <Divider />

       <h2>Employee Payslip</h2>  
       <DatePicker style={{marginLeft:'auto'}}/>
       </Row>
       {/* <p>{today}</p>  <p>total salary</p>  */}
       <Table columns={columns} dataSource={empinfo}></Table> 
    {/* <Container>
     <Row>
     <Col>
    <div>
     
      <div>
     <h2 style={{fontFamily:'roboto'}}>Salary load summary</h2>    
    <span>{today}</span>
    
    </div>

    
    </div> 
     </Col>  
      </Row>  
     <Row className='mt-5'>
      <Col> 
      <h2>Employee payslip</h2>
      </Col>
      
     
      <Col>
       <p>
        <Form>

      <Form.Select aria-label="Default select example">
  <option>Select Payrol Month</option>
  <option value="January">January {yyyy}</option>
  <option value="February">February {yyyy}</option>
  
  <option value="March">March {yyyy}</option>
  <option value="April">April {yyyy}</option>
  <option value="May">May {yyyy}</option>
  <option value="June">June {yyyy}</option>
  
  <option value="July">July {yyyy}</option>
  <option value="August">August {yyyy}</option>
  <option value="3">September {yyyy}</option>
  
  <option value="3">October {yyyy}</option>
  <option value="3">November {yyyy}</option>
  <option value="3">December</option>
</Form.Select>            
      </Form>
      </p>
      
      </Col>
      </Row>
    <Table striped bordered hover>
  <thead>
    <tr style={{color:'grey'}}>

      
     
      <th >Employee name</th>
      <th>Employee id</th>
      <th>working day</th>
      
      <th>Earned salary</th>
      <th>Tax deducted</th>
      <th>net pay</th>
      <th>Download pdf</th>
    

    </tr>
  </thead>
 
  <tbody>
 
  {empinfo.map((emp)=>(

<tr key={emp._id}>
   <td>{emp.Employee_Name}</td>  
   
   <td>{emp.Emp_id}</td>  
   <td>{emp.working_day}</td>  
   
   <td>{emp.earned_salary}</td>  
   <td>{emp.tax_deducted}</td>  
   <td>{emp.net_pay}</td>  
   

   <td>





     <span><i className="fa-solid fa-file-pdf fa-lg" onClick={()=>getid(emp)}></i></span>
     
     &nbsp;&nbsp;
     <a href='#'>send email</a>
   </td>
   </tr>
  ))}
   
   
   
  
  </tbody>
</Table>        
</Container> */}
      {/* </Row> */}

        </div>
    )
}

export default Sheetinfo