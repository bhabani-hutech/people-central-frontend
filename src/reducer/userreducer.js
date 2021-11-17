export let userloginreducer = (state= {}, action)=>{
    switch (action.type) {
        
      
      case 'USER_LOGIN_REQUEST':
          return { loading:true}  
      case  'USER_LOGIN_SUCCESS':
              return { loading:false, userinfo: action.payload}  
      case 'USER_LOGIN_FAIL':
              return { loading:false, error: action.payload}  
        
      case 'USER_LOGOUT':

             return { }        
        default:
            return state
   
   
   
   
        }  
  
    }
export let clientreducer = (state = {},action)=>{
        switch (action.type) {
           case 'CLIENT_CREATE_REQUEST':
                return {
                    loading:true
                
                }
           
            case 'CLIENT_CREATE_SUCCESS':
           
                return {
                       
                       loading:false,        
                       success: true, 
                       client:action.payload
                   
                    }
             
           case 'CLIENT_CREATE_FAIL':
                      
           
           return {
                        loading:false,
                        error:action.payload
                       }
   
           default:
                return state
        }
   
   }