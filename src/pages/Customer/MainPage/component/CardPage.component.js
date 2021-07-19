import { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
class CardPage extends Component {
  render() {
    return (
      <>
        <Card
          style={{
            width: "250px",
            boxShadow: "-1px 0px 20px 4px black ",
            borderRadius: "15px",
            margin: "0 10px 2px 10px",

          }}
        >
          <CardBody className="d-flex justify-content-end">
            <div
              id="infoBox"
              className="d-flex flex-column align-items-end justify-content-center "
            >
              <CardTitle tag="h6">{this.props.lable}</CardTitle>
              <CardText>
                <small className="text-muted">قیمت: {this.props.price} تومان </small>
              </CardText>
            </div>
            <div
              style={{
                width: "9vw",
                height: "10vh",
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
                src={this.props.image}
              />
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export { CardPage };
