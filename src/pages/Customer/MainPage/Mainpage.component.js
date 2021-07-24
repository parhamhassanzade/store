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
        <div >
          <Link
            to="/coustomer/productspage/لبنیات"
            style={{ textDecoration: "none" ,color:"unset"}}
            className="d-flex justify-content-end flex-wrap m-5"
          >
            <h2>محصولات گروه لبنیات</h2>
          </Link>
          <section className="d-flex justify-content-end  flex-wrap m-5">
            {this.state.Dairy.map((item, index) => {
              return (
                <Link
                key={index}
                  style={{ textDecoration: "none" }}
                  to={`/coustomer/product/${item.name}`}
                >
                  <CardPage
                    key={index}
                    image={item.avatar}
                    lable={item.name}
                    price={item.price}
                  />
                </Link>
              );
            })}
          </section>
        </div>

        <div>
          <Link
            to="/coustomer/productspage/کالاهای اساسی و خواروبار"
            style={{ textDecoration: "none" ,color:"unset"}}
            className="d-flex justify-content-end flex-wrap m-5 "
          >
            <h2>محصولات گروه کالاهای اساسی و خواروبار </h2>
          </Link>
          <section className="d-flex justify-content-end flex-wrap m-5 ">
            {this.state.essentialProducts.map((item, index) => {
              return (
                <Link
                key={index}
                  style={{ textDecoration: "none",marginTop:"15px" }}
                  to={`/coustomer/product/${item.name}`}
                >
                  <CardPage
                    key={index}
                    image={item.avatar}
                    lable={item.name}
                    price={item.price}
                  />
                </Link>
              );
            })}
          </section>
        </div>
      </>
    );
  }
}

export { MainPage };
