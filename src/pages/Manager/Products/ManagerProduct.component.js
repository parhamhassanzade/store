import React, { Component } from "react";
import { ManagerHeader } from "../../../layout/PageController";

// import { axios } from "axios";
class ManagerProduct extends Component {
  state = {
    product: []
  };
  async componentDidMount() {
    const axios=require('axios')
     await axios.get('http://localhost:3000/Products?parentgroup=لبنیات').then(respose=>{ this.setState({product:respose.data})
   
    }).catch(function (error) {
      console.log(error);
    })
  }
  render() {
    return (
      <>
        
        {
          console.log("gvr",this.state.product)

        }
 

        <ManagerHeader />
        <nav className="my-3 container d-flex justify-content-between">
          <button className="btn btn-success">افزودن کالا</button>
          <h4>مدیریت کالا ها</h4>
        </nav>
        <div className="container ">
          <table className="table table-bordered border-dark " dir="rtl">
            <thead>
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">نام کالا</th>
                <th scope="col">دسته بندی</th>
                <th scope="col">ویرایش</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export { ManagerProduct };
