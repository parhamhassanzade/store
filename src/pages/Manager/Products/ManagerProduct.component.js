import React, { Component } from "react";
import { ManagerHeader } from "../../../layout/PageController";

// import { axios } from "axios";
class ManagerProduct extends Component {
  state = {
    product: [],
  };

  //? get all data
  async componentDidMount() {
    const axios = require("axios");
    await axios
      .get("http://localhost:3000/Products")
      .then((respose) => {
        this.setState({ product: respose.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  CreateRow = () => {
    return this.state.product.map((row, i) => {
      return (
        <tr key={i}>
          <td>{row.id}</td>
          <th scope="row">{row.name}</th>
          <td>
            {row.parentgroup}/{row.grop}
          </td>
          <td>
            <a href="#">ویرایش</a>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        {}

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
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export { ManagerProduct };
