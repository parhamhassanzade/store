import { Component } from "react";
import { ManagerHeader } from "../../../../layout/PageController";
class OrderDone extends Component {
  render() {
    return (
      <>
        <ManagerHeader />
        <nav className="my-3 container d-flex justify-content-between">
            <span>
          <div class="form-check d-inline-block me-3">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              سفارش های در انتظار
            </label>
          </div>
          <div class="form-check d-inline-block">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              defaultChecked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              سفارش های انجام شده
            </label>
          </div>
          </span>
          <h4>مدیریت سفارش ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
                <th scope="col">نام کاربر</th>
                <th scope="col">مجموع مبلغ</th>
                <th scope="col" className="text-center">
                  زمان ثبت سفارش
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">اکبر عبدی</th>
                <td>154000</td>
                <td className="text-center">5/10/1399</td>
                <td className="text-center">
                  <a href="#">بررسی سفارش</a>
                </td>
              </tr>
              <tr>
                <th scope="row">رامین رحیمی</th>
                <td>154000</td>
                <td className="text-center">5/10/1399</td>
                <td className="text-center">
                  <a href="#">بررسی سفارش</a>
                </td>
              </tr>
              <tr>
                <th scope="row">فریبرز عربنیا</th>
                <td>154000</td>
                <td className="text-center">5/10/1399</td>
                <td className="text-center">
                  <a href="#">بررسی سفارش</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export { OrderDone };
