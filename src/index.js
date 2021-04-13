import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import Counterreducer from './containers/store/reducers/countersreducer';
// import resultreducer from './containers/store/reducers/resultsreducer';
// import  {combineReducers,applyMiddleware,compose} from 'redux';
// import logger from 'redux-logger';
// import composeWithDevTools from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// const rootreducer=combineReducers({
//    ctr: Counterreducer,
//    res: resultreducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store=createStore(rootreducer,composeEnhancers(
//     applyMiddleware(logger,thunk)));

ReactDOM.render(
    <App />,document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

