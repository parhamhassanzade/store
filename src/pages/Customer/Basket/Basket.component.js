import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { DELETE } from "../../../redux/Action/index";
import { set } from "lodash";

const Basket = () => {
  const products = useSelector((state) => state);
  const dispach = useDispatch();
  console.log(products);

  let x = [];
  const CreateRow = () => {
    return products.product.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.index.name}</th>
          <td>{item.index.price}تومان</td>
          <td>{item.number}</td>
          <td>
            {item.index.price * item.number}
            تومان
          </td>
          <td>
            <sapn
              className="btn"
              onClick={() =>
                dispach(DELETE(item.index.name, item.index.price * item.number))
              }
            >
              حذف
            </sapn>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <CustomerHeader />
      <div className="container" dir="rtl">
        <div className="row">
          <h1>سبد خرید</h1>
        </div>
        <div className="row mt-5">
          <table className="table col-sm table-striped">
            <thead>
              <tr>
                <th scope="col">کالا</th>
                <th scope="col">قیمت</th>
                <th scope="col">تعداد</th>
                <th scope="col">قیمت کل</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>{CreateRow()}</tbody>
          </table>
        </div>
        <div className="row ">
          <div className="col-sm">
            <span>جمع کل: {products.totalPrice} تومان</span>
          </div>
          <div className="col-sm d-flex justify-content-end">
            <Link to="/coustomer/Checkout">
              <button className="btn btn-success">نهایی کردن سبد خرید</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Basket };
