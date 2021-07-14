import React, { useState, useEffect } from "react";
import { CustomerHeader } from "../../../layout/PageController";
import { FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "../../../redux/Action";
import { Card, CardBody, Button, CardTitle, CardText } from "reactstrap";

function Product() {
  //?initial state
  const [Data, setData] = useState([]);

  useEffect(async () => {
    await getData();
  }, []);


  //?get data to show product
  const getData = async () => {
    const axios = require("axios");
    const location = window.location.pathname;
    await axios
      .get(`http://localhost:3000/Products?name=${location.split("/")[3]}`)
      .then((response) => setData(response.data))

      .catch((erro) => {
        console.log(erro);
      });
  };

  const dispatch = useDispatch();
  return (
    <>
      <CustomerHeader />
      {Data.map((item) => {
        return (
          <section key={item.id}>
            <Card>
              <CardBody className="d-flex justify-content-end">
                <div
                  id="infoBox"
                  className="d-flex flex-column align-items-end justify-content-center me-5"
                >
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardText>
                    <small className="text-muted">{item.parentgroup} </small>
                    <small className="text-muted"> &rsaquo;{item.grop}</small>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      قیمت: {item.price} تومان
                    </small>
                  </CardText>
                  <div>
                    {item.Inventory > 0 ? (
                      <Button onClick={() => dispatch(ADD())} color="success">
                        <FaPlusCircle className="m-1" />
                        افزودن به سید خرید
                      </Button>
                    ) : (
                      ""
                    )}

                    {item.Inventory > 0 ? (
                      <input
                        min="0"
                        max={item.Inventory}
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
                    alt="product image "
                    sytyle={{
                      height: "100%",
                      width: "100%",
                      object: "cover",
                    }}
                    src={item.avatar}
                  />
                </div>
              </CardBody>
            </Card>
          </section>
        );
      })}
    </>
  );
}

export { Product };
