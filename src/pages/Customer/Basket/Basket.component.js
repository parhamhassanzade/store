import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { DELETE } from "../../../redux/Action/index";

const Basket = () => {
  const products = useSelector((state) => state);
  const dispach = useDispatch();
  const CreateRow = () => {
    return products.product.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.name}</th>
          <td>{item.price}تومان</td>
          <td>{item.Inventory}</td>
          <td>
            {item.price * item.Inventory}
            تومان
          </td>
          <td>
            <sapn
              className="btn"
              onClick={() =>
                dispach(DELETE(item.name, item.price * item.Inventory))
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
