export let userloginreducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userinfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };

    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};
export let clientreducer = (state = {}, action) => {
  switch (action.type) {
    case "CLIENT_CREATE_REQUEST":
      return {
        loading: true,
      };

    case "CLIENT_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        client: action.payload,
      };

    case "CLIENT_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }

};

export let paysleeplistreducer = (state= {empinfo:[]}, action)=>{
  switch (action.type) {
      
    
    case 'PAYSLEEP_LIST_REQUEST':
        return { loading:true, empinfo:[]}  
    case  'PAYSLEEP_LIST_SUCCESS':
    
    return { loading:false, empinfo: action.payload}  
    case 'PAYSLEEP_LIST_FAIL':
            return { loading:false, error: action.payload}  
                         
      default:
          
          return state
  }  
}

export let sheetuploadreducer = (state={}, action)=>{
  switch (action.type) {
      
    
    case 'SHEET_UPLOAD_REQUEST':
        return { loading:true}  
    case  'SHEET_UPLOAD_SUCCESS':
    
    return { loading:false, empsheet: action.payload, success:true}  
    
    
    case 'SHEET_UPLOAD_FAIL':
            return { loading:false, error: action.payload}  
                         
      default:
          
          return state
  }  
}