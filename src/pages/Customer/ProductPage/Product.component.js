import React, { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { FaPlusCircle } from "react-icons/fa";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
class Product extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      popoverOpen: false,
      Data: [],
      PoductData: [],
    };
    this.togglePopover = this.togglePopover.bind(this);
  }
  async componentDidMount() {
    this.setState({ Data: await this.getData() });
    this.setState({ PoductData: await this.state.Data[0] });
  }
  async getData() {
    const axios = require("axios");
    const location = window.location.pathname;
    console.log(location.split("/")[3]);
    return axios
      .get(`http://localhost:3000/Products?name=${location.split("/")[3]}`)
      .then((response) => response.data)
      .catch((erro) => {
        console.log(erro);
      });
  }
  togglePopover() {
    this.setState({ popoverOpen: !this.state.popoverOpen });
  }
  render() {
    const { popoverOpen } = this.state;

    return (
      <>
        <CustomerHeader />

        <section>
          <Card>
            <CardBody className="d-flex justify-content-end">
              <div
                id="infoBox"
                className="d-flex flex-column align-items-end justify-content-center me-5"
              >
                <CardTitle tag="h5">{this.state.PoductData.name}</CardTitle>
                <CardText>
                  <small className="text-muted">
                    {this.state.PoductData.parentgroup}{" "}
                  </small>
                  <small className="text-muted">
                    {" "}
                    &rsaquo;{this.state.PoductData.grop}
                  </small>
                </CardText>
                <CardText>
                  <small className="text-muted">
                    قیمت: {this.state.PoductData.price} تومان
                  </small>
                </CardText>
                <div>
                  <Button color="success">
                    <FaPlusCircle className="m-1" />
                    افزودن به سید خرید
                  </Button>
                  {this.state.PoductData.Inventory > 0 ? (
                    <input
                      min="0"
                      max={this.state.PoductData.Inventory}
                      type="number"
                      placeholder="0"
                      style={{
                        width: "50px",
                        marginLeft: "15px",
                        border: "1px solid black",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bolder",
                        marginLeft: "12px",
                      }}
                    >
                      عدم موجودی
                    </span>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "15vw",
                  height: "35vh",
                  overflow: "hidden",
                }}
                id="imageBox"
                className="d-flex justify-content-end"
              >
                <img
                alt="product image"
                  sytyle={{
                    height: "100%",
                    width: "100%",
                    object: "cover",
                  }}
                  src={this.state.PoductData.avatar}
                />
              </div>
            </CardBody>
          </Card>
          <div dir="rtl">
            <nav class="navbar navbar-expand-lg navbar-light bg-light me-2">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <button className="btn" id="mypopover" type="button">
                    مشخصات
                  </button>
                  <Popover
                    placement="bottom"
                    isOpen={popoverOpen}
                    target="mypopover"
                    toggle={this.togglePopover}
                    dir="rtl"
                  >
                    <PopoverHeader
                      style={{
                        backgroundColor: "lightgray",
                        fontSize: "20px",
                        width: "500px",
                      }}
                    >
                      مشخصات کالا
                    </PopoverHeader>
                    <PopoverBody
                      style={{
                        backgroundColor: "lightblue",
                        fontSize: "18px",
                        width: "500px",
                      }}
                    >
                      {this.state.PoductData.discription}
                    </PopoverBody>
                  </Popover>
                </li>
                <li class="nav-item active">
                  <button className="btn" type="button">
                    نظرات
                  </button>
                </li>
                <li class="nav-item active">
                  <button className="btn" type="button">
                    اخرین قیمت
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </>
    );
  }
}

export { Product };
