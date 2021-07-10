import React, { Component } from "react";
import { ManagerHeader } from "../../../layout/PageController";
import style from "./Quantify.module.scss";
class Quntity extends Component {
  state = {
    quantify: [],
    Showquantify: [],
    MaxIteminPage: 5,
    changes: [],
  };
  componentDidMount() {
    this.getAllData();
    this.getLimitData();
  }

  // componentDidUpdate() {
  //   this.handleChangevalue();
  // }

  handleSetvalue() {
    let axios = require("axios");
    this.state.changes.map(async(item) => {
    await axios
        .patch(`http://localhost:3000/Products/${item.productName}`, {
          [item.entity]: item.newValue,
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    });
  }

  handleChangevalue(newValue, productName, entity) {
    console.log(newValue, productName, entity);
    this.setState({
      changes: [
        ...this.state.changes,
        {
          productName: productName,
          newValue: newValue,
          entity: entity,
        },
      ],
    });

  }

  async getAllData() {
    const axios = require("axios");
    await axios
      .get(`http://localhost:3000/Products`)
      .then((respose) => {
        this.setState({ quantify: respose.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //? get limit data
  async getLimitData(pageNumber) {
    const axios = require("axios");
    await axios
      .get(`http://localhost:3000/Products?_page=${pageNumber}&_limit=5`)
      .then((respose) => {
        this.setState({ Showquantify: respose.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CreateRow() {
    return this.state.Showquantify.map((row, i) => {
      return (
        <tr key={i}>
          <td>{row.name}</td>
          <td>
            <input
              type="number"
              onChange={(e) =>
                this.handleChangevalue(e.target.value, row.id, e.target.name)
              }
              defaultValue={row.price}
              name="price"
            />
          </td>
          <td>
            <input
              type="number"
              onChange={(e) =>
                this.handleChangevalue(e.target.value, row.id, "Inventory")
              }
              defaultValue={row.Inventory}
              name="Inventory"
            />
          </td>
        </tr>
      );
    });
  }

  handelPaginationUI = () => {
    const page = Math.ceil(
      this.state.quantify.length / this.state.MaxIteminPage
    );
    let btnInPage = [];
    for (let i = 1; i <= page; i++) {
      btnInPage.push(
        <li style={{ listStyleType: "none" }} key={i} className="page-item">
          <a
            className="page-link"
            onClick={() => {
              this.getLimitData(i);
            }}
            href="#"
          >
            {i}
          </a>
        </li>
      );
    }
    return btnInPage;
  };

  render() {
    return (
      <>
        <ManagerHeader />
        <nav className="my-3 container d-flex justify-content-between">
       
          <button
            onClick={() => this.handleSetvalue()}
            className="btn border border-dark"
          >
            ذخیره
          </button>
          <h4>مدیریت موجودی و قیمت ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
                <th scope="col"> کالا</th>
                <th scope="col">قیمت</th>
                <th scope="col">موجودی</th>
              </tr>
            </thead>
            <tbody>{this.CreateRow()}</tbody>
          </table>
          <nav
            className="d-flex justify-content-center mt-5"
            aria-label="Page navigation example"
          >
            {this.handelPaginationUI()}
            <ul className="pagination"></ul>
          </nav>
        </div>
      </>
    );
  }
}

export { Quntity };
