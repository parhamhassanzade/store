import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './../redux/store';
import {
  MainPage,
  Product,
  Basket,
  ProductsPage,
  Checkout,
} from "../pages/Customer/PageController";

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
      <Provider store={store}>
        <Switch>
          <Route path="/" exact={true}>
            <MainPage />
          </Route>
          <Route path="/coustomer/product">
            <Product />
          </Route>
          <Route path="/coustomer/productspage">
            <ProductsPage />
          </Route>
          <Route path="/coustomer/basket">
            <Basket />
          </Route>
          <Route path="/coustomer/Checkout">
            <Checkout />
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
</Provider>
      </BrowserRouter>
    );
  }
}

export { Router };
