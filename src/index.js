import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import { Router } from "./route/App.router";
import { ManagerHeader } from "./layout/Manager/ManagerHeader/ManagerHeader.component";
ReactDOM.render(

// <Router />
<ManagerHeader/>

, document.getElementById("root"));

reportWebVitals();
