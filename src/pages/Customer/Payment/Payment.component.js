import React, { Component } from "react";
import { Link } from "react-router-dom";
class Payment extends Component {
  render() {
    return (
      <>
        <section className="d-flex justify-content-center ">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh", width: "50vw"}}
          >
             
            <Link to="/coustomer/PeymentFail">
              <button className="btn btn-secondary me-2">انصراف</button>
            </Link>
            <Link to="/coustomer/PeymentSuccess">
              <button className="btn btn-success">پرداخت</button>
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export { Payment };
