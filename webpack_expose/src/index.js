import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'pubsub-js'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GetRoutes} from './router'
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render 所触发的首次渲染

// concurent 渲染模式 Fiber架构下的工作链
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
        <GetRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
