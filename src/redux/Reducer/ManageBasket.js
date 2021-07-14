import { ADD,DELETE } from "../Action";
const ManageBasket = (state = 0, action) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "delete":
      return state - 1;
    default:
      return state;
  }
};

export  {ManageBasket};