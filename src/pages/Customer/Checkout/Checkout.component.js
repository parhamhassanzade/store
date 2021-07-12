import React, { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { DatePicker } from "jalali-react-datepicker";
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
            <form className="row">
              <div className="d-flex col flex-column container">
                <lable>نام:</lable>
                <input
                  type="text"
                  name="Fname"
                  style={{ border: "2px solid black" }}
                />
                <lable>ادرس:</lable>
                <textarea style={{ border: "2px solid black" }} />
                <lable>تاریخ تحویل:</lable>
                <input
                  type="datetime-local"
                  name="date"
                  style={{ border: "2px solid black" }}
                />
                {/* <DatePicker /> */}
              </div>
              <div className="d-flex col flex-column container">
                <lable>نام خانوادگی:</lable>
                <input
                  type="text"
                  name="Lname"
                  style={{ border: "2px solid black" }}
                />
                <lable>تلفن همراه :</lable>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  style={{ border: "2px solid black" }}
                  maxlength="11"
                />
              </div>
              <button className="btn btn-success">ثبت خرید</button>
            </form>
          </div>
        </section>
      </wrapper>
    );
  }
}

export { Checkout };
