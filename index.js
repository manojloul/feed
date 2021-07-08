import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from "./Header"
import Foot from "./Foot"

ReactDOM.render(
  <>
    <Head />

    <App />

    <Foot />
  </>
  ,
  document.getElementById('root')
);

