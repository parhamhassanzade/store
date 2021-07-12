import { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { Link } from "react-router-dom";
class Basket extends Component {
  render() {
    return (
      <wrapper>
        <CustomerHeader />
        <div className="container" dir="rtl">
          <div class="row">
            <h1>سبد خرید</h1>
          </div>
          <div className="row mt-5">
            <table class="table col-sm table-striped">
              <thead>
                <tr>
                  <th scope="col">کالا</th>
                  <th scope="col">قیمت</th>
                  <th scope="col">تعداد</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row ">
            <div class="col-sm">
              <span>جمع کل: 125000 تومان</span>
            </div>
            <div class="col-sm d-flex justify-content-end">
              <Link to="/coustomer/Checkout">
              <button className="btn btn-success">نهایی کردن سبد خرید</button>
              </Link>
            </div>
          </div>
        </div>
      </wrapper>
    );
  }
}

export { Basket };
