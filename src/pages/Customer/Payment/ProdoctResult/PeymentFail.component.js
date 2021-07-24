import React, { Component } from "react";
import { CustomerHeader } from "../../../../layout/PageController";
class PeymentFail extends Component {
  render() {
    return (
      <>
        <CustomerHeader />
        <section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div>
            <p style={{ fontSize: "25px", color: "red", fontWeight: "bolder" }}>
              پرداخت موفقیت آمیز نبود.لطفا مجدد تلاش کنید
            </p>
          </div>
        </section>
      </>
    );
  }
}

export { PeymentFail };
