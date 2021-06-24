import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage, Product, Basket } from "../pages/Customer/PageController";
import {
  Login,
  OrderWait,
  OrderDone,
  ManagerProduct,
  Quntity,
} from "../pages/Manager/PageController";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/coustomer/product">
            <Product />
          </Route>
          <Route path="/coustomer/basket">
            <Basket />
          </Route>
          <Route path="/manager/login">
            <Login />
          </Route>
          <Route path="/manager/orderwait">
            <OrderWait />
          </Route>
          <Route path="/manager/orderDone">
            <OrderDone />
          </Route>
          <Route path="/manager/ManagerProduct">
            <ManagerProduct />
          </Route>
          <Route path="/manager/Quntity">
            <Quntity />
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
