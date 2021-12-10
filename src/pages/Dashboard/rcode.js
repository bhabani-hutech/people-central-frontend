import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'


import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userlogout} from '../../action/useraction'
// import {Form, Row, Button, Container} from 'react-bootstrap'
import axios from 'axios'
import 'antd/dist/antd.css';

import {Form, Input, Upload, Button} from 'antd'

import {UploadOutlined} from '@ant-design/icons'
import {uploadsheet} from '../../action/useraction'
const Fileupload = () => {  

  const [file, setfile] = useState(null)
    const [description, setdescription] = useState('')
    
    var datasend = null
    
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
   
    
  
  const userlogin = useSelector(state => state.userlogin)  
    let {laoding, userinfo, error} = userlogin
    const sheetupload = useSelector(state => state.sheetupload)  
   
    let {loading:sheetloading, success, error:sheeterror} = sheetupload
    
    // const navigate = useNavigate();
    
    let history = useHistory()
   
    const dispatch = useDispatch()
    let handlefile = (e)=>{

    
      setfile(e.file)
      console.log(e)
    }
   

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
       console.log(file)
      
      
       dispatch(uploadsheet(file))
    
    };
    useEffect(() => {   
        if(!userinfo){
         history.push('/')
    
        }  
   
      }, [userinfo, history])     
     let useerlogout = ()=>{
     
      dispatch(userlogout())
  
      }  
     
     
    return (     
     <div>
     <Form
     {...formItemLayout}
     onFinish={onFinish}
      
    >
<Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
     
     
     



        // getValueFromEvent={normFile}     
        
      >

        {/* <Upload name="empsheet" onChange={handlefile} >
          <Button icon={<UploadOutlined />}>Click to upload</Button>   
        
      
        </Upload> */}
      </Form.Item>
      <Upload onChange={handlefile}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>


      <Form.Item
        
        // name={['user', 'name']}
        label="Name"
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
       
        <Input style={{width:'50%'}} />
      </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>   
    {/* <form onSubmit={submitfile} method='post'>


    <label>Select a file:</label>         
  
     <input type='file' onChange={uploadfile}/> 

    <input type='text' placeholder='description' /> 
    <button type='submit'>submit</button>
     </form> */}
    {/* <Container>
    <h2>Upload payroll sheet</h2> 

    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}> 
    <Form onSubmit={submitfile}>
    
    
    

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
  
   
   
    </Form>      
    </div>

    </Container>     */}
 
 {/* <button onClick={useerlogout}>log out</button>
     */}
        </div>
    )
}

export default Fileupload

import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'


import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userlogout} from '../../action/useraction'
import {Form, Row, Button, Container} from 'react-bootstrap'
import axios from 'axios'
import {uploadsheet} from '../../action/useraction'

// uicode
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
     <div style={{fontFamily:'roboto'}}>
    <Container>
    <h2>Upload payroll sheet</h2> 

    <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}> 
    <Form onSubmit={filesubmit}>
    
    {/* <FileBase type="file" multyple={false} onDone={({base64})=>setfilename({ ...filename, file: base64 })}></FileBase>       */}
    

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Select payroll doc</Form.Label>  
    
    <Form.Control type="file" placeholder="Enter description" onChange={uploadfile}/> 
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Label>description</Form.Label>  
    <Form.Control type="text" autoComplete='off' placeholder="Add description"/> 
    </Form.Group>
    
    {/* <div className="d-grid gap-2 mt-2"> */}
    <br /> 
    <Button variant="primary" type="submit">Add file</Button>&nbsp;&nbsp;

    <Button variant="secondary" onClick={clear} type="button" autoComplete='nope'>clear</Button>
  {/* </div> */}
   
   
    </Form>      
    </div>


    {/* <button onClick={useerlogout}>log out</button> */}
    </Container>    
        </div>
    )
}
export default Fileupload