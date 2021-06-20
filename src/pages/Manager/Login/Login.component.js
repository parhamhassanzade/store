import { Component } from "react";
import{Link} from "react-router-dom"
class Login extends Component {
  render() {
    return (
      <div
        style={{ height: "100vh" }}
        className={"d-flex justify-content-center align-items-center"}
      >
        <div
          className="card d-flex justify-content-center align-items-center border-dark p-5"
          style={{ width: "50rem" }}
        >
          <h2>ورود به پنل مدیریت فروشگاه پی شاپ</h2>
          <form className="row  needs-validation " noValidate>
            <div className="mb-3 row ">
              <label className="form-label d-flex flex-row-reverse ">
                {" "}
                : نام کاربری
              </label>
              <input
                type="text"
                className="form-control border-dark"
                id="exampleFormControlInput1"
                required
              />
            </div>
            <div className="mb-3 row ">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label d-flex flex-row-reverse "
              >
                : رمز عبور
              </label>
              <input
                className="form-control border-dark "
                type="password"
                name="password"
                id="exampleFormControlTextarea1"
                required
              />
            </div>

            <div className=" d-flex justify-content-center align-items-center  ">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                ورود
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-start" style={{width:"100%"}}>
            <Link style={{textDecoration:"none"}} to="/">بازگشت به سایت</Link>
          </div>
        </div>
      </div>
    );
  }
}

export { Login };
