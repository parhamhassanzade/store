import { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
class CardPage extends Component {
  render() {
    return (
      <>
        <Card
          style={{
            width: "250px",
            height: "350px",
            boxShadow: "-1px 0px 20px 4px black ",
            borderRadius: "15px",
            margin: "0 10px 2px 10px",
            overflow:"hidden"
          }}
        >
          <CardImg
            top
            width="100%"
            height="100%"
            src={this.props.image}
            alt="Card image cap"
          />
          <CardBody className="d-flex justify-content-end">
          <div
              id="infoBox"
              className="d-flex flex-column align-items-end justify-content-center "
            >
            <CardTitle tag="h6">{this.props.lable}</CardTitle>
            <CardText>
              <small className="text-muted">
                قیمت: {this.props.price} تومان{" "}
              </small>
            </CardText>
           
          </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export { CardPage };
