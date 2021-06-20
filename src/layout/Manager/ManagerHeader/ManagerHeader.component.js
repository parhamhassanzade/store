import { Component } from "react";

import { Link } from "react-router-dom";

class ManagerHeader extends Component {
  render() {
    return (
      <header className="border-bottom  border-dark">
        <nav className="navbar d-flex flex-row-reverse navbar-expand-lg  bg-light p-3">
          <h1 className="navbar-brand " href="#">
            پنل مدیریت فروشگاه
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
                <a className="nav-link" to="/">
                  بازگشت به سایت
                </a>
              </li>
            </ul>

            <ul className="nav ms-5 ">
              <li className="nav-item border border-dark">
                <a className="nav-link active "  href="#">
                  سفارش ها
                </a>
              </li>
              <li className="nav-item border border-dark">
                <a className="nav-link" href="#">
                  موجودی قیمت ها
                </a>
              </li>
              <li className="nav-item border border-dark">
                <a className="nav-link" href="#">
                 کالاها
                </a>
              </li>
            </ul>

         
          </div>
        </nav>
      </header>
    );
  }
}

export { ManagerHeader };
