import axios from 'axios'
export let userlogin = (email,password)=> async(dispatch)=>{


    try {
       dispatch({type:'USER_LOGIN_REQUEST'}) 
       let config = {
         headers: {
             'Content-Type':'application/json',           
         }  
       
        }
        
       let {data} = await axios.post('/api/user/login',{email, password}, config)
    //    https://hutechpayrollapp.azurewebsites.net/application/logintoken
       dispatch({type:'USER_LOGIN_SUCCESS', payload:data})
       
       
       localStorage.setItem('userinfo', JSON.stringify(data))
    
    } catch (err) {      
    
        dispatch({type:'USER_LOGIN_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message
      
       })
    }  


}

export let listpaysleep = ()=> async(dispatch, getState)=>{

    let { userlogin: {userinfo}, } = getState()
    let config = {
      headers: {
          'Content-Type':'application/json',
  
          Authorization: `Bearer ${userinfo.token}`
      }  
    
     }   
      try {
      dispatch({type:'PAYSLEEP_LIST_REQUEST'})
  
  
  
      
      
      let {data} = await axios.get('/api/file/getsheet',config)
       dispatch({type:'PAYSLEEP_LIST_SUCCESS',payload:data})
       } 
  catch (err) {
          
      dispatch({type:'PAYSLEEP_LIST_FAIL', payload:err.responce && err.responce.data.message ? 
      
      err.responce.data.message : err.message
      })
   
    }  
  
  }

  export let uploadsheet = (empsheet)=> async(dispatch, getState)=>{
    let { userlogin: {userinfo}, } = getState()
    
    let config = {
      headers: {
        
        'Content-Type':'application/json',
          Authorization: `Bearer ${userinfo.token}`
      }  
     }   
      try {
      dispatch({type:'SHEET_UPLOAD_REQUEST'})
      let {data} = await axios.post('/api/file/fileupload', empsheet,config)
       
      dispatch({type:'SHEET_UPLOAD_SUCCESS',payload:data})
    
    } 
  catch (err) {    
      dispatch({type:'SHEET_UPLOAD_FAIL', payload:err.responce && err.responce.data.message ? 
      err.responce.data.message : err.message
      })
   
    }  
  }  


  export let userlist = ()=> async(dispatch, getState)=>{

    let { userlogin: {userinfo}, } = getState()
    let config = {
     
     
     
     
      headers: {
     
        'Content-Type':'application/json',
  
          Authorization: `Bearer ${userinfo.token}`
      }  
    
  
     }   
      try {
      dispatch({type:'USER_LIST_REQUEST'})    
      let {data} = await axios.get('/api/user/userlist',config)
       
      dispatch({type:'USER_LIST_SUCCESS',payload:data})
       } 
  catch (err) {
      dispatch({type:'USER_LIST_FAIL', payload:err.responce && err.responce.data.message ? 
      
      err.responce.data.message : err.message
      })
   
    }  
  
  } 


  export let userupdate = (user)=> async(dispatch, getState)=>{
    try {
      dispatch({type:'USER_UPDATE_REQUEST'}) 
      let {userlogin: { userinfo}} = getState() 
       let config = {
         headers: {
         
  
          'Content-Type':'application/json',
          Authorization: `Bearer ${userinfo.token}`
         }  
        }
        let {data} = await axios.put(`/api/user/${user._id}`,user, config)
      
        dispatch({type:'USER_UPDATE_SUCCESS'})
       dispatch({type:'USER_LIST_SUCCESS', payload:data})
      } catch (err) {      
      
        dispatch({type:'USER_UPDATE_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message    
      })
    
    }  
  
  }

export let clientonboard = (client)=> async(dispatch, getState)=>{
 
    try {
       dispatch({type:'CLIENT_CREATE_REQUEST'})    
    //    let { userlogin: {userinfo}, } = getState()
       
    let config = {
         headers: {
             'Content-Type':'application/json',

            //  Authorization: `Bearer ${userinfo.token}`
         }  
       
        }
  

       let {data} = await axios.post('https://hutechpayrollapp.azurewebsites.net/application/addClient', client, config)
       dispatch({type:'CLIENT_CREATE_SUCCESS', payload:data})
    } catch (err) {      
        dispatch({type:'CLIENT_CREATE_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message
    })
    }
}  
export let userlogout = ()=>async(dispatch)=>{
  
    localStorage.removeItem('userinfo')  
    dispatch({type:'USER_LOGOUT'})    
 

}