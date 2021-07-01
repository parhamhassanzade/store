import { Component } from "react";
import { ManagerHeader } from "../../../../layout/PageController";
import { Link } from "react-router-dom";

class OrderWait extends Component {
  state = {
    OrderWait: [],
    MaxIteminPage: 5,
  };

  componentDidMount() {
    this.getAllData();
  }

  async getAllData() {
    const axios = require("axios");
    await axios
      .get(`http://localhost:3000/Order?position=wait`)
      .then((respose) => {
        this.setState({ OrderWait: respose.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  DateConvertor(date) {
    const day = new Date(new Date(date)).getDay();
    const month = new Date(new Date(date)).getMonth();
    const year = new Date(new Date(date)).getFullYear();

    return `${year}/${month}/${day}`;
  }

  CreateRow() {
    return this.state.OrderWait.map((row, i) => {
      return (
        <tr key={i}>
          <th scope="row">{row.name}</th>
          <td>{row.totalPrice}تومان</td>
          <td className="text-center">
            {this.DateConvertor(row.orderRegister)}
          </td>
          <td className="text-center">
            <a href="#">بررسی سفارش</a>
          </td>
        </tr>
      );
    });
  }

  handelPaginationUI = () => {
    const page = Math.ceil(
      this.state.OrderWait.length / this.state.MaxIteminPage
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
          <span>
            <div class="form-check d-inline-block me-3">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                سفارش های در انتظار
              </label>
            </div>
            <div class="form-check d-inline-block">
              <Link to="/manager/orderDone">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />

                <label class="form-check-label" for="flexRadioDefault2">
                  سفارش های انجام شده
                </label>
              </Link>
            </div>
          </span>
          <h4>مدیریت سفارش ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
                <th scope="col">نام کاربر</th>
                <th scope="col">مجموع مبلغ</th>
                <th scope="col" className="text-center">
                  زمان ثبت سفارش
                </th>
                <th scope="col"></th>
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

export { OrderWait };
