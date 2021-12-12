import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'


import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userlogout} from '../../action/useraction'
// import {Form, Row, Button, Container} from 'react-bootstrap'
import axios from 'axios'
import {uploadsheet} from '../../action/useraction'



import {Button, Row, Divider, Input, Typography} from 'antd'
let {Title} = Typography
const Fileupload = () => {

    
    
    const [file, setfile] = useState('')
    
    const [description, setdescription] = useState('')
    
    var datasend = null
    let uploadfile = ({ target: { files }})=>{
     let data = new FormData()
     
     data.append('empsheet', files[0])
     
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
    let {loading, success, error:sheeterror} = sheetupload
    // const navigate = useNavigate();
    
      let history = useHistory()


    const dispatch = useDispatch()
   
   
    useEffect(() => {
      
        if(!userinfo){
   
          history.push('/')
    
    
        }  
     }, [userinfo, history])    
    
    //  let useerlogout = ()=>{
  
    //   dispatch(userlogout())
  
    //   }    
    let filesubmit = (e)=>{
     e.preventDefault()     
    console.log(file)
    if(!datasend){
     
      alert('file not selected')
    }
    
    console.log(datasend)   

    dispatch(uploadsheet(datasend))
    
    
    // if(success){
      alert('file uploaded')
      window.location.reload()
      // navigate('/sheetinfo')    
    
    
      // }

    // else {


    //   alert('file not uploaded')
    // }
    
    //  console.log(filename)
    }
    let clear = ()=>{ 
      setfile('')
      setdescription('')   
      window.location.reload()
    }

    return (     
     <div>
    {/* <Container> */}
    
    
    {/* style={{fontFamily:'roboto'}} */}
    <h2 style={{textAlign:'start'}}>Upload Payrol Sheet</h2> 
     <Divider />  

    <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-start', marginLeft:'10rem'}}> 
    <form onSubmit={filesubmit}>
      <Row style={{marginRight:'26rem', marginBottom:'10px'}}>
    
    
    {/* <label htmlFor=""> <p style={{ fontWeight:'bold'}}>Select payrol</p> </label>&nbsp; */}
    
    


    <Title level={5}>Select Payrol </Title>&nbsp;
    <input type="file" onChange={uploadfile}/>  
    


    </Row>
    <Row>
    {/* <input type="text" placeholder='description' style={{height:'4.2rem', width:'21rem'}}/> */}
    <Title level={5}>Description</Title>&nbsp;
    {/* <p style={{ fontWeight:'bold'}}>Description</p>&nbsp; */}
    
    <Input placeholder='description' style={{width:'50%', marginBottom:'10px'}}/>
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