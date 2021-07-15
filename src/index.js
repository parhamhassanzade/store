import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Router } from "./route/App.router";

import { Provider } from "react-redux";
import store from './redux/store';


ReactDOM.render(
 
    <Router />
  ,

  document.getElementById("root")
);

reportWebVitals();
