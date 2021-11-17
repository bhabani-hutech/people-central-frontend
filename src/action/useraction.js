import axios from 'axios'
export let userlogin = (userName,password)=> async(dispatch)=>{


    try {
       dispatch({type:'USER_LOGIN_REQUEST'}) 
       let config = {
         headers: {
             'Content-Type':'application/json'
         }  
       
        }

       let {data} = await axios.post('https://hutechpayrollapp.azurewebsites.net/application/logintoken', {userName, password}, config)
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