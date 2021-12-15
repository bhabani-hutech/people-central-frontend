import axios from "axios";
export let userlogin = (userName, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let { data } = await axios.post(
      "https://peoplecentral.herokuapp.com/application/logintoken",
      { userName, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    localStorage.setItem("userinfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        err.responce && err.responce.data.message
          ? err.responce.data.message
          : err.message,
    });
  }
};
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



    
    // https://payrolapp.herokuapp.com
    let {data} = await axios.get('https://payrolapp.herokuapp.com/api/file/getsheet',config)
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
    // https://payrolapp.herokuapp.com/api/file/fileupload
    let {data} = await axios.post('https://payrolapp.herokuapp.com/api/file/fileupload', empsheet,config)
     
    dispatch({type:'SHEET_UPLOAD_SUCCESS',payload:data})
  
  } 
catch (err) {    
    dispatch({type:'SHEET_UPLOAD_FAIL', payload:err.responce && err.responce.data.message ? 
    err.responce.data.message : err.message
    })
 
  }  
}  

export let clientonboard = (client) => async (dispatch, getState) => {
  try {
    dispatch({ type: "CLIENT_CREATE_REQUEST" });
    //    let { userlogin: {userinfo}, } = getState()

    let config = {
      headers: {
        "Content-Type": "application/json",

        //  Authorization: `Bearer ${userinfo.token}`
      },
    };

    let { data } = await axios.post(
      "https://peoplecentral.herokuapp.com/application/addClient",
      client,
      config
    );
    dispatch({ type: "CLIENT_CREATE_SUCCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "CLIENT_CREATE_FAIL",
      payload:
        err.responce && err.responce.data.message
          ? err.responce.data.message
          : err.message,
    });
  }
};
export let userlogout = () => async (dispatch) => {
  localStorage.removeItem("userinfo");
  dispatch({ type: "USER_LOGOUT" });
};
