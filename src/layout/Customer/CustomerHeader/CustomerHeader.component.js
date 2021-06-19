import { Component } from "react";
import style from "../CustomerHeader/CustomerHeader.module.scss";
import { FaShoppingCart, FaPinterest } from "react-icons/fa";

class CustomerHeader extends Component {
  render() {
    return (
      <header className="border-bottom  border-dark">
        <nav className="navbar d-flex flex-row-reverse navbar-expand-lg  bg-light p-3">
          <h1 className="navbar-brand " href="#">
            پی شاپ
            <FaPinterest />
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  سبد خرید
                  <FaShoppingCart />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  مدیریت
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export  {CustomerHeader};
