import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage } from "../pages/Customer/MainPage/Mainpage.component";
import { Product } from "../pages/Customer/ProductPage/Product.component";
import { Basket } from "../pages/Customer/Basket/Basket.component";
import { Login } from "../pages/Manager/Login/Login.component";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/managerLogin">
            <Login />
          </Route>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route exact={true}>
            <div>404</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export { Router };
