import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
//import { Router } from "./route/App.router";
import { Quntify } from "./pages/Manager/Quantity/Quantify.component";


ReactDOM.render(

 //<Router />
 <Quntify/>



, document.getElementById("root"));

reportWebVitals();
