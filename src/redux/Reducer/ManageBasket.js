let initialState = {
  product: [],
  ManageBasket: 0,
  totalPrice: 0,
  userInfo: [],
};
const ManageBasket = (state = initialState, action) => {

  switch (action.type) {
    case "add":
      return {
        ...state,
        product: [
          ...state.product,
          {
            name: action.payload.name,
            price:action.payload.price,
            Inventory: action.numberOFproducts,
          },
        ],
        ManageBasket: state.ManageBasket + 1,
        totalPrice:
          state.totalPrice + action.payload.price * action.numberOFproducts,
      };

    case "detele":
      return {
        ...state,
        product: state.product.filter(
          (item) => item.index.name !== action.productName
        ),
        ManageBasket: state.ManageBasket - 1,
        totalPrice: state.totalPrice - action.productPrice,
      };

    case "info":
      return {
        ...state,
        userInfo: [
          {
            info: action.UserInformation,
          },
        ],
      };
    default:
      return state;
  }
};

export { ManageBasket };
