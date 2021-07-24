import React, { Component } from "react";
import { CustomerHeader } from "../../../../layout/PageController";
class PeymentSuccess extends Component {
  render() {
    return (
      <>
        <CustomerHeader show={true} />
        <section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div>
            <p style={{fontSize:"25px",color:"green",fontWeight:"bolder"}}>پرداخت با موفقیت انجام شد</p>
          </div>
        </section>
      </>
    );
  }
}

export { PeymentSuccess };
