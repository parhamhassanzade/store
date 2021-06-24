import { Component } from "react";
import style from "../CustomerHeader/CustomerHeader.module.scss";
import { FaShoppingCart, FaPinterest, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/coustomer/basket">
                  سبد خرید
                  <FaShoppingCart />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manager/login">
                  مدیریت
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export { CustomerHeader };
