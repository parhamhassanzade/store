import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

const ModalsEdit = (props) => {
  const { buttonLabel, className,data } = props;

  const [modal, setModal] = useState(false);
  const [state, setSate] = useState({
    
    name: data.name,
    parentgroup:data.parentgroup,
    discription: data.discription,
    
  });

  async function patchData() {
    let axios = require("axios");
  await  axios
      .patch(`http://localhost:3000/Products/${data.index}`,{
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
      <Button color="white" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form dir="rtl" className="d-flex flex-column container ">
            <lable for="image">تصویر کالا</lable>
            <input type="file" name="image" />

            <lable for="product"> نام کالا:</lable>
            <input
              style={{ border: "1px solid black" }}
              type="text"
              name="product"
              defaultValue={data.name}
              onChange={(e) => {
                hanelchange("name", e.target.value);
              }}
            />

            <lable for="category">دسته بندی:</lable>
            <select
            value={data.parentgroup}
              onChange={(e) => {
                hanelchange("parentgroup", e.target.value);
              }}
            >
              <option></option>
              <option>لبنیات</option>
              <option>کالاهای اساسی و خواروبار</option>
            </select>

            <lable For="discription">توضیحات:</lable>
            <textarea
            value={data.discription}
            name="discription"
              onChange={(e) => {
                hanelchange("discription", e.target.value);
              }}
            />
          </form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
            <a href="http://localhost:3001/manager/ManagerProduct">
          <Button color="success" onClick={()=>patchData()}>
            ذخیره
          </Button>
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export { ModalsEdit };
