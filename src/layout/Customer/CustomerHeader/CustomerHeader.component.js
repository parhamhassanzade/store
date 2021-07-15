import { Component } from "react";
import style from "../CustomerHeader/CustomerHeader.module.scss";
import { FaShoppingCart, FaPinterest, FaBars } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function CustomerHeader(props) {
  const counter=useSelector(state=>state.ManageBasket)

    return (
      <header className="border-bottom  border-dark">
        <nav className="navbar d-flex flex-row-reverse navbar-expand-lg  bg-light p-3">
          <Link className="nav-link" style={{ color: "unset" }} to="/">
            <h1 style={{ fontSize: "x-large" }} className="navbar-brand">
              پی شاپ
              <FaPinterest className="ms-4" />
            </h1>
          </Link>
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
              <li className="nav-item active me-5">
                <Link className="nav-link" to="/coustomer/basket">
                  <span className="badge btn-success p-1 me-2 ">
                    {counter }
                  </span>
                  سبد خرید
                  <FaShoppingCart />
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/manager/login">
                  مدیریت
                  <span style={{ fontSize: "x-large" }}>
                    <FcManager />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }


export { CustomerHeader };
