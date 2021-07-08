import { Component } from "react";
import Sidebar from "react-sidebar";
import { useHistory, useLocation } from "react-router-dom";
import { CustomerHeader } from "../../../layout/PageController";
import { CardPage } from "../MainPage/component/CardPage.component";
const mql = window.matchMedia(`(min-width: 800px)`);
class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      location: window.location.pathname.split("productspage/")[1],
      Cardvalue: [],
      product: [],
     
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  componentDidMount() {
    this.getCardValue();
    this.getDairyTitel();

  }
  async getCardValue() {
    const axios = require("axios");

    await axios
      .get(`http://localhost:3000/Products?parentgroup=${this.state.location}`)
      .then((response) => {
        this.setState({ Cardvalue: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  async getDairyTitel() {
    const axios = require("axios");

    await axios
      .get(`http://localhost:3000/GroupProducts?_sort=لبنیات&_order=asc`)
      .then((response) => {
        this.setState({ product: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  }


  CreateRow() {
    return this.state.product.map((row, i) => {
      return (
        <ol key={i} className="list-group">
          <li className="list-group-item active" aria-current="true">
           {row.groupTitle}
          </li>
          <li className="list-group-item " aria-current="true">
           {row.title}
          </li>
         
        </ol>
      );
    });
  }


  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  render() {
    return (
      <>
        <section>
          <Sidebar
            dir="rtl"
            sidebar={
           this.CreateRow()
         
            }
            open={this.state.sidebarOpen}
            docked={true}
            onSetOpen={this.onSetSidebarOpen}
          >
            <CustomerHeader />
            <h2 className="d-flex justify-content-end flex-wrap m-5 ">
              محصولات قسمت انتخابی
            </h2>
            <section className="d-flex justify-content-end flex-wrap m-5">
              {this.state.Cardvalue.map((item, index) => {
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
          </Sidebar>
        </section>
      </>
    );
  }
}

export { ProductsPage };
