import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import { Router } from "./route/App.router";
import { Product } from "./pages/Customer/PageController";

ReactDOM.render(
  <Router />,
  // <Product/>,

  document.getElementById("root")
);

reportWebVitals();
