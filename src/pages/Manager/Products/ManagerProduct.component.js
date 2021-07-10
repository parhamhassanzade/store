import React, { Component } from "react";
import { ManagerHeader } from "../../../layout/PageController";
import style from "./ManagerProduct.module.scss";
class ManagerProduct extends Component {
  state = {
    product: [],
    Showproduct: [],
    MaxIteminPage: 5,
  };

  componentDidMount() {
    this.getLimitData();
    this.getAllData();
  }

  handleDelete(rowId) {
    const arrayCopy = this.state.Showproduct.filter((row) => row.id !== rowId);
    this.setState({ Showproduct: arrayCopy });
  }

  async getAllData() {
    const axios = require("axios");
    await axios
      .get(`http://localhost:3000/Products`)
      .then((respose) => {
        this.setState({ product: respose.data });
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
        this.setState({ Showproduct: respose.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CreateRow() {
    return this.state.Showproduct.map((row, i) => {
      return (
        <tr key={i}>
          <td className="d-flex justify-content-center ">
            <img
              className="rounded-circle"
              style={{ height: "50px", width: "50px" }}
              src={row.avatar}
            />
          </td>
          <th scope="row">{row.name}</th>
          <td>
            {row.parentgroup}/{row.grop}
          </td>
          <td className="d-flex justify-content-center">
            <a className="ms-2" style={{ textDecoration: "none" }} href="#">
              ویرایش{" "}
            </a>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              onClick={() => this.handleDelete(row.id)}
            >
              حذف
            </a>
          </td>
        </tr>
      );
    });
  }
  handelPaginationUI = () => {
    const page = Math.ceil(
      this.state.product.length / this.state.MaxIteminPage
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
          <button className="btn btn-success">افزودن کالا</button>
          <h4>مدیریت کالا ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">نام کالا</th>
                <th scope="col">دسته بندی</th>
                <th scope="col">ویرایش</th>
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

export { ManagerProduct };
