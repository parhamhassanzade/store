import React, { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";

import { FaPlusCircle } from "react-icons/fa";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
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
    };
    this.togglePopover = this.togglePopover.bind(this);
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
                <CardTitle tag="h5">کالای فلان</CardTitle>
                <CardText>
                  <small className="text-muted">لبنیات </small>
                  <small className="text-muted"> &rsaquo;شیر</small>
                </CardText>
                <CardText>
                  <small className="text-muted">قیمت: 200000 </small>
                </CardText>
                <div>
                  <Button color="success">
                    <FaPlusCircle className="m-1" />
                    افزودن به سید خرید
                  </Button>
                  <input
                    type="number"
                    placeholder="0"
                    style={{
                      width: "50px",
                      marginLeft: "15px",
                      border: "1px solid black",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "red",
                  width: "15vw",
                  height: "35vh",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
                id="imageBox"
                className="d-flex justify-content-end"
              >
                <img
                  sytyle={{
                    height: "100%",
                    width: "100%",
                  }}
                  src="http://placeimg.com/640/480/food"
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
                      کالای خوبی هست من برای خونه خودمونم بردم عالی بوده بخر
                      حتما
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
