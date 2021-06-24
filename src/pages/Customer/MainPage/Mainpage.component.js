import { Component } from "react";
import { CustomerHeader } from "../../../layout/PageController";
class MainPage extends Component {
  render() {
    return (
      <>
        <CustomerHeader />
        <div>this is first page that customer see</div>
      </>
    );
  }
}

export { MainPage };
