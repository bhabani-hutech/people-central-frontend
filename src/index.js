import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userloginreducer} from './reducer/userreducer'

let reducer = combineReducers({  
  userlogin:userloginreducer 
})




let userinfofromstorage = localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : null
let intialstate = {
userlogin:{ userinfo:userinfofromstorage},

}
let middleware = [thunk]
let store = createStore(reducer, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>  
      <App />
    
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);