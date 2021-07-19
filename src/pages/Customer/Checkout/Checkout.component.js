import React, { useState, useEffect } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersInfo } from "../../../redux/Action/index";
function Checkout() {
  //?state
  const [userinfo, setUserInfo] = useState([]);

  const dsipatch = useDispatch();
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
                onBlur={(e) => {
                  setUserInfo({ ...userinfo, Fname: e.target.value });
                }}
              />
              <lable className="mt-3">ادرس:</lable>
              <textarea
                onBlur={(e) => {
                  setUserInfo({ ...userinfo, Address: e.target.value });
                }}
                style={{ border: "2px solid black" }}
              />
              <lable className="mt-3">تاریخ تحویل:</lable>
              <input
                type="date"
                name="date"
                style={{ border: "2px solid black" }}
                required
                onBlur={(e) => {
                  setUserInfo({ ...userinfo, time: e.target.value });
                }}
              />
            </div>
            <div className="d-flex col flex-column container">
              <lable className="mt-3">نام خانوادگی:</lable>
              <input
                type="text"
                name="Lname"
                style={{ border: "2px solid black" }}
                required
                onBlur={(e) => {
                  setUserInfo({ ...userinfo, Lname: e.target.value });
                }}
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
                onBlur={(e) => {
                  setUserInfo({ ...userinfo, phone: e.target.value });
                }}
              />
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <Link to="/coustomer/Payment">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => {dsipatch(usersInfo(userinfo))}}
                >
                  ثبت خرید
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </wrapper>
  );
}

export { Checkout };
