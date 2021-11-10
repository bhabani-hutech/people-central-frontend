import axios from 'axios'
export let userlogin = (email,password)=> async(dispatch)=>{


    try {
       dispatch({type:'USER_LOGIN_REQUEST'}) 
       let config = {
         headers: {
             'Content-Type':'application/json',
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
         }  
       
        }

       let {data} = await axios.post('https://hutechpayrollapp.azurewebsites.net/application/logintoken', {email, password}, config)
       dispatch({type:'USER_LOGIN_SUCCESS', payload:data})
       localStorage.setItem('userinfo', JSON.stringify(data))
    
    
     
    
    } catch (err) {      
    
        dispatch({type:'USER_LOGIN_FAIL', payload:err.responce && err.responce.data.message ? 
        err.responce.data.message : err.message
      
       })
    }  




}

export let userlogout = ()=>async(dispatch)=>{
  
    localStorage.removeItem('userinfo')  
    dispatch({type:'USER_LOGOUT'})    
 

}