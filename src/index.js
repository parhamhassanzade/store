import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';
import {CustomerHeader} from './layout/Customer/CustomerHeader/CustomerHeader.component';
import 'bootstrap/dist/css/bootstrap.css';
ReactDOM.render(
  <CustomerHeader/>,
  document.getElementById('root')
);


reportWebVitals();
