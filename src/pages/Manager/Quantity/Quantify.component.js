import React, { Component } from "react";
import {ManagerHeader} from "../../../layout/PageController"
import style from "./Quantify.module.scss";
class Quntify extends Component {
 
  render() {
    return (
      <>
        <ManagerHeader />
        <nav className="my-3 container d-flex justify-content-between">
          <button className="btn border border-dark">ذخیره</button>
          <h4>مدیریت  موجودی و قیمت ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
               
                <th scope="col"> کالا</th>
                <th scope="col">قیمت</th>
                <th scope="col">موجودی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>چای گلستان 100 گرمی</td>
                <td><input type="number"   value="150" readonly/></td>
                <td><input type="number"   value="70" readonly/></td>
              </tr>
              <tr>
               
                <td>روغن مایع لادن طلایی</td>
                <td><input type="number"   value="150" readonly/></td>
                <td><input type="number"   value="15" readonly/></td>
              </tr>
              <tr>
                
                <td>کره بسته بندی شده 500 گرمی </td>
                <td><input type="number"   value="150" readonly/></td>
                <td><input type="number"   value="50" readonly/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export { Quntify };
