import { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Basket() {
  const products = useSelector((state) => state);
  console.log(products);
  const CreateRow = () => {
    return products.product.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{item.index.name}</th>
          <td>{item.index.price}تومان</td>
          <td>{item.number}</td>
          <td>حذف</td>
        </tr>
      );
    });
  };

  return (
    <wrapper>
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>{CreateRow()}</tbody>
          </table>
        </div>
        <div className="row ">
          <div className="col-sm">
            <span>
              جمع کل: 125000 تومان
              
              </span>
          </div>
          <div className="col-sm d-flex justify-content-end">
            <Link to="/coustomer/Checkout">
              <button className="btn btn-success">نهایی کردن سبد خرید</button>
            </Link>
          </div>
        </div>
      </div>
    </wrapper>
  );
}

export { Basket };
