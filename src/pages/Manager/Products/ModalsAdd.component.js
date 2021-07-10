import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

const ModalsAdd = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [state, setSate] = useState({
    name: "",
    parentgroup: "",
    discription: "",
  });

  async function postData() {
    let axios = require("axios");
  await  axios
      .post("http://localhost:3000/Products", {
        name: state.name,
        parentgroup: state.parentgroup,
        discription: state.discription,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
      setModal(!modal);
  }

  function hanelchange(statetype, newvalu) {
    setSate({
        ...state,
      [statetype]: newvalu,
    });
  }

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form dir="rtl" className="d-flex flex-column container ">
            <lable>تصویر کالا</lable>
            <input type="file" name="image" />

            <lable> نام کالا:</lable>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              name="product"
              onChange={(e) => {
                hanelchange("name", e.target.value);
              }}
            />

            <lable>دسته بندی:</lable>
            <select
              onChange={(e) => {
                hanelchange("parentgroup", e.target.value);
              }}
            >
              <option></option>
              <option>لبنیات</option>
              <option>کالاهای اساسی و خواروبار</option>
            </select>

            <lable>توضیحات:</lable>
            <textarea
              onChange={(e) => {
                hanelchange("discription", e.target.value);
              }}
            />
          </form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button color="success" onClick={()=>postData()}>
            ذخیره
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { ModalsAdd };
