import { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { CardPage } from "./pageController";
import { Link } from "react-router-dom";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      Dairy: [],
      essentialProducts: [],
    };
  }
  componentDidMount() {
    this.getDairy();
    this.getEssentialProducts();
  }

  async getDairy() {
    const axios = require("axios");

    await axios
      .get(`http://localhost:3000/Products?parentgroup=لبنیات`)
      .then((response) => {
        this.setState({ Dairy: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
  async getEssentialProducts() {
    const axios = require("axios");

    await axios
      .get(
        `http://localhost:3000/Products?parentgroup=کالاهای اساسی و خواروبار`
      )
      .then((response) => {
        this.setState({ essentialProducts: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  render() {
    return (
      <>
        <CustomerHeader />
        <div>
          <Link
            to="/coustomer/productpage"
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-end flex-wrap m-5"
          >
            <h1>محصولات گروه لبنیات</h1>
          </Link>
          <section className="d-flex justify-content-end flex-wrap m-5">
            {this.state.Dairy.map((item, index) => {
              return (
                <CardPage
                  key={index}
                  image={item.avatar}
                  lable={item.name}
                  price={item.price}
                />
              );
            })}
          </section>
        </div>

        <div>
          <Link
            to="/coustomer/productpage"
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-end flex-wrap m-5 "
          >
            <h1>محصولات گروه خواروبار </h1>
          </Link>
          <section className="d-flex justify-content-end flex-wrap m-5 ">
            {this.state.essentialProducts.map((item, index) => {
              return (
                <CardPage
                  key={index}
                  image={item.avatar}
                  lable={item.name}
                  price={item.price}
                />
              );
            })}
          </section>
        </div>
      </>
    );
  }
}

export { MainPage };
