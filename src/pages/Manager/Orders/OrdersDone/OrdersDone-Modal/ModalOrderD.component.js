import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { useState } from "react";

const ModalOrderD = (props) => {
  const { buttonLabel, className, userName } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const createRow = () => {
    return userName.basket.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.Inventory}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Button color="success" className="btn btn-light" onClick={toggle}>
        {buttonLabel}
      </Button>

      <Modal dir="rtl" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>بررسی سفارشات </ModalHeader>
        <ModalBody>
          <form dir="rtl" className="container ">
            <div className="d-flex flex-column">
              <div className="d-flex">
                <label> نام مشتری: </label>
                <p> {userName.name} </p>
              </div>

              <div className="d-flex">
                <label> آدرس: </label>
                <p className="flex-wrap"> {userName.address}</p>
              </div>

              <div className="d-flex">
                <label> تلفن: </label>
                <p>{userName.phone} </p>
              </div>

              <div className="d-flex">
                <label> زمان سفارش: </label>
                <p> {userName.deliverTime}</p>
              </div>

              <div className="d-flex">
                <label> زمان تحویل: </label>
                <p> {userName.deliverTime}</p>
              </div>
            </div>
          </form>
          <br />
          <table class="table">
            <thead>
              <tr>
                <th scope="col">کالا</th>
                <th scope="col">قیمت</th>
                <th scope="col">تعداد</th>
              </tr>
            </thead>
            <tbody>{createRow()}</tbody>
          </table>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <div>{userName.deliverTime}</div>
        </ModalFooter>
      </Modal>
    </>
  );
};

export { ModalOrderD };
