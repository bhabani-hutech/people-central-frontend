import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App';

let reducer = combineReducers({

})
let intialstate = {}
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