import React,{ useState,useEffect} from 'react'
// import {Table, Row, Badge} from 'react-bootstrap'


import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userlist, userupdate} from '../../action/useraction'
import {Table, Switch} from 'antd'
const Userlist = () => {    
    const dispatch = useDispatch()    

    const userlogin = useSelector(state => state.userlogin)

    let {loading, userinfo, error} = userlogin
    const userupdatee = useSelector(state => state.userupdate)
    let {success} = userupdatee
    
    
    // let navigate = useNavigate()   
    
    
    
     let history = useHistory()
    const [ishr, setishr] = useState(false)
    
    const [isAdmin, setisAdmin] = useState(false)
    useEffect(() => {        
        if(success){
            
            dispatch({type:'USER_UPDATE_RESET'})
                    
           history.push('/onboarding')
                 
        }
        if(userinfo && userinfo.isAdmin){
    
        dispatch(userlist())  
    
    }
    
    else {
     history.push('/') 
    }
    


}, [userinfo, history, success])   //success
 

let handlrol = (record)=>{
    console.log(record)
   }

function onChange(check, record) {
    // console.log(`switch to ${checked}`);
    
    console.log(check, record)
    // console.log()
   
    let senduser ={
        _id: record._id ,
        email: record.email,
        isAdmin: check,
        ishr:record.ishr
    }
    dispatch(userupdate(senduser))
    console.log(senduser)
  }

  function onchangehr(check, record) {
    // console.log(`switch to ${checked}`);
    
    console.log(check, record)
    // console.log()
   
    let senduser ={
        _id: record._id ,
        email: record.email,
        isAdmin: record.isAdmin,
        ishr: check
    }
    dispatch(userupdate(senduser))
    console.log(senduser)
  }

    let handlerole = (userr)=>{
      


        if(userr.ishr === true ){
         setishr(false)
        }
        
        else {
            setishr(true)
        }

        let senduser = {           


            ishr:ishr,
            _id:userr._id

        }
           
        dispatch(userupdate(senduser))
        console.log(senduser)     
        
    }

    
    let handleroleadmin = (user)=>{
      
     if(user.isAdmin){
        setisAdmin(false)
     }
     else {
         setisAdmin(true)
     }
     let senduser = {           

        isAdmin:isAdmin,
        
        _id:user._id
    }
           

        console.log(user)  
    }
     let handlerol = (userr)=>{
      console.log(userr)

    
      let senduser = {

        email:userr.email,

        isAdmin:userr.isAdmin,
        ishr:userr.ishr
      }


      console.log(senduser)
     }
    const userrlist = useSelector(state => state.userlist)
    let {user} = userrlist
    const columns = [
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'name',
          
          // render: text => <a>{text}</a>,
        },
        
        {
          
          
          title: 'admin',
          dataIndex: 'isAdmin', 
          key: 'age',  
        //   <span onClick={()=> handleroleadmin(record)}> <span onClick={()=> handleroleadmin(record)}>not admin</span>
          render:(text, record)=>{
              return <div>{record.isAdmin ? <Switch defaultChecked onChange={(e)=> onChange(e, record)} />: <Switch onChange={(e)=> onChange(e, record)} />}</div>   
          
            }
        },
        {
            title: 'hr',
            dataIndex: 'ishr',
            
          
            key: 'age',
            render:(text, record)=>{
                return <div>{record.ishr ?<Switch defaultChecked onChange={(e)=> onchangehr(e, record)} /> : <Switch onChange={(e)=> onchangehr(e, record)} />}</div>   
            
              }
            //   <span onClick={()=> handlerole(record)}>hr</span>
          
        },
    ]
        // {
        //     title: 'action',
        //     dataIndex: 'action',
        //     key: 'age',
        //     render:(text, record)=>{
        //      return <div onClick={()=> handleclick(record)}>{<FilePdfFilled />}&nbsp;&nbsp;
            
        //      <span>send email</span>
        //       </div>
        //     }
    return (
        <div>
    
    <h2>userlist</h2>
    <Table columns={columns} dataSource={user}></Table> 
    
   {/* <Table striped bordered hover>


    <thead> 
     <th>email</th>       
     <th>hr</th>   
     <th>admin</th>   
    
    </thead>
    

      {user && user.map((useer)=>(
    <tbody>   

                  
          <td>{useer.email}</td>


          <td>{useer.ishr ? <Badge size='sm' onClick={()=> handlerole(useer)}>hr</Badge>:<Badge onClick={()=> handlerole(useer)}>not hr</Badge>}</td>
              
          <td>{useer.isAdmin ? <Badge onClick={()=> handleroleadmin(useer)}>admin</Badge>:<Badge onClick={()=> handlerole(useer)}>not admin</Badge>}</td>
          </tbody>         
      ))}   

    </Table> */}
        </div>
    
    )
}



export default Userlist