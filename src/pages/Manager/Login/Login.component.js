import { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      UserInfo: [],
      enter: false,
    };
  }
  componentDidMount() {
    this.getData();
  }

  async getData() {
    let axios = require("axios");
    await axios
      .get(`http://localhost:3000/users?role=admin`)
      .then((res) => {
        this.setState({ UserInfo: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validation(inputValue){
    if(inputValue==this.state.UserInfo.password){
      this.setState({enter:true})
    }
  }
  render() {
    return (
      <>
      {}
        {this.state.UserInfo.map((item) => {
          return (
            
            <div
              style={{
                height: "100vh",
                background: "linear-gradient(to right,gray, white)",
              }}
              className={"d-flex justify-content-center align-items-center"}
            >
             
              <div
                className="card d-flex justify-content-center align-items-center border-dark p-5"
                style={{ width: "30rem", boxShadow: "5px 5px 15px black" }}
              >
                <h5 className="m-2">ورود به پنل مدیریت فروشگاه پی شاپ</h5>
                <form className="row  needs-validation " noValidate>
                  <div className="mb-3 row ">
                    <label className="form-label d-flex flex-row-reverse ">
                      : نام کاربری
                    </label>
                    <input
                      type="text"
                      className="form-control border-dark"
                      id="exampleFormControlInput1"
                      name="username"
                      required
                      onChange={(e)=>{
                        if(e.target.value==item.password){
                          this.setState({enter:true})
                        }
                      }}
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
                      onChange={(e)=>{
                        if(e.target.value==item.password){
                          this.setState({enter:true})
                        }
                      }}
                    
                    />
                  </div>

                  <div className=" d-flex justify-content-center align-items-center  ">
                    {this.state.enter ? (
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/manager/orderwait"
                        >
                          ورود
                        </Link>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
                <div
                  className="d-flex justify-content-start "
                  style={{ width: "100%" }}
                >
                  <Link style={{ textDecoration: "unset" }} to="/">
                    بازگشت به سایت
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export { Login };
