import React, { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
class Checkout extends Component {
  render() {
    return (
      <wrapper>
        <CustomerHeader />
        <section dir="rtl" className="container mt-3">
          <div className="row">
            <h2>نهایی کردن خرید</h2>
          </div>
          <div className="container">
            <form className="row needs-validation" novalidate>
              <div className="d-flex col flex-column container">
                <lable className="mt-3">نام:</lable>
                <input
                  type="text"
                  name="Fname"
                  style={{ border: "2px solid black" }}
                  required
                />
                <lable className="mt-3">ادرس:</lable>
                <textarea style={{ border: "2px solid black" }} />
                <lable className="mt-3">تاریخ تحویل:</lable>
                <input
                  type="date"
                  name="date"
                  style={{ border: "2px solid black" }}
                  required
                />
                {/* <DatePicker /> */}
              </div>
              <div className="d-flex col flex-column container">
                <lable className="mt-3">نام خانوادگی:</lable>
                <input
                  type="text"
                  name="Lname"
                  style={{ border: "2px solid black" }}
                  required
                />
                <lable className="mt-3">تلفن همراه :</lable>
                <small>جهت هماهنگی در تحویل</small>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  
                  style={{ border: "2px solid black" }}
                  maxlength="11"
                  placeholder="*********09"
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <Link to="/coustomer/Payment">
                <button className="btn btn-success ">ثبت خرید</button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </wrapper>
    );
  }
}

export { Checkout };
