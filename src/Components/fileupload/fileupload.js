import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'


import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userlogout} from '../../action/useraction'
// import {Form, Row, Button, Container} from 'react-bootstrap'
import axios from 'axios'
import {uploadsheet} from '../../action/useraction'



import {Button, Row, Divider, Input, Typography, Alert, message} from 'antd'
import {saveAs} from 'file-saver'
let {Title, Link} = Typography




const Fileupload = () => {
    
    const [file, setfile] = useState('')
    
    const [description, setdescription] = useState('')
    
    var datasend = null
    let uploadfile = ({ target: { files }})=>{
    
      let data = new FormData()
     data.append('empsheet', files[0]) 
    //  console.log(data.get('empsheet').name)
     
     let filename = data.get('empsheet').name
     
     if(!filename.toLowerCase().endsWith('.xlsx')){
     
      // console.log(filename)
       
      message.error({
      content:'File selected is not in an accepted format',
        style: {
          marginTop:'16rem'

        }
      })
      // alert('not exel')
      
      // <Alert message='not exel' type='warning'></Alert>






      document.getElementById('ecelfile').value = '' 
      data.delete('empsheet')
    }
     
    //  console.log()
     datasend = data

     
     
    //  axios.post('/api/file/fileupload', data).then((res)=>{
    //    console.log(res)
    //   }).catch((err)=>{
    //   console.log(err)
    
    //   })   
    }
    const userlogin = useSelector(state => state.userlogin)  
    let {laoding, userinfo, error} = userlogin
    
    const sheetupload = useSelector(state => state.sheetupload)  
    console.log(sheetupload)
    let {loading, success, error:sheeterror} = sheetupload
    // const navigate = useNavigate();
    
      let history = useHistory()


    const dispatch = useDispatch()
   
    useEffect(() => {
      
        if(!userinfo){
   
          history.push('/')
    
    
        }  
     }, [userinfo, history])    
    useEffect(()=>{

    })
    //  let useerlogout = ()=>{
  
    //   dispatch(userlogout())
   
    const handleclick = ()=>{
      // axios.post('https://payrolapp.herokuapp.com/api/file/createpdf', emp).then(()=>{
        axios.get('https://payrolapp.herokuapp.com/api/file/getsample', {responseType:'blob'}).then((res)=>{
    
          let exelblob = new Blob([res.data], {type:'application/xlsx'})        
            saveAs(exelblob, 'employe.xlsx')
       
          })  
        // })  
        // console.log(emp)
      // console.log(employee)
    }    

    let filesubmit = (e)=>{
     e.preventDefault()     
    // console.log(file)
    
    if(datasend === null){  
      message.error({
        content:'Please upload the excel file',
        style: {
          marginTop:'16rem'

        }
      })  
    }


    // console.log(datasend)  
    
    else {
      dispatch(uploadsheet(datasend))
      message.success({

        content:'file uploaded successfully',
        style: {
          marginTop:'16rem'
        
        }
      }) 
      history.push('/onboarding')
      // window.location.reload()

    }
           
    }
    
    
    
    
    let clear = ()=>{ 
      setfile('')
      document.getElementById('descr').value = '' 
         
      setdescription('')   
      history.push('/onboarding')
      
      
      // window.location.reload()
    }

    return (     
     <div>
    {/* <Container> */}
    
    
    {/* style={{fontFamily:'roboto'}} */}
    <h2 style={{textAlign:'start'}}>Upload Payrol Sheet</h2> 
     <Divider />  

    <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-start', marginLeft:'10rem', marginTop:'5rem'}}> 
    <form onSubmit={filesubmit}>
      <Row style={{marginRight:'26rem', marginBottom:'10px'}}>
    
    
    {/* <label htmlFor=""> <p style={{ fontWeight:'bold'}}>Select payrol</p> </label>&nbsp; */}
    
    <Title level={4}>Select Excel File </Title>&nbsp;
    
    <input id='ecelfile' type="file" onChange={uploadfile} />  
    
         
      </Row>
     <Row>
     <Typography style={{fontSize:'15px'}}>[only xlsx formats are supported]</Typography>    
  
  
      </Row> 
     
    <Row>

     <Typography style={{fontSize:'15px'}}>Maximum Upload File Size is 5mb</Typography>   

    </Row> 
     <Row>
    <Link style={{fontSize:'15px'}} onClick={handleclick}>Download Sample Template for import</Link>         
     
     </Row>
    <Row>
    {/* <input type="text" placeholder='description' style={{height:'4.2rem', width:'21rem'}}/> */}
    <Title level={4}>Description</Title>&nbsp;
    {/* <p style={{ fontWeight:'bold'}}>Description</p>&nbsp; */}    
    <Input id='descr' placeholder='description' style={{width:'50%', marginBottom:'10px'}}/>
    </Row>
   
      
    <Button htmlType='submit' type='primary'>Add file</Button> &nbsp;
    <Button onClick={clear}>Cancel</Button>
    
    </form> 
    {/* <Form onSubmit={filesubmit}>
    
    
    

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select payroll doc</Form.Label>  
    
    <Form.Control type="file" placeholder="Enter description" onChange={uploadfile}/> 
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Label>description</Form.Label>  
    <Form.Control type="text" autoComplete='off' placeholder="Add description"/> 
    </Form.Group>
    
    
    <br /> 
    <Button variant="primary" type="submit">Add file</Button>&nbsp;&nbsp;

    <Button variant="secondary" onClick={clear} type="button" autoComplete='nope'>clear</Button>
  
   
   
    </Form>       */}
    </div>

    {/* <button onClick={useerlogout}>log out</button> */}
    {/* </Container>     */}
        </div>
    )

  
  }

export default Fileupload