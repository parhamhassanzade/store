let initialState = {
  product: [],
  ManageBasket: 0,
  totalPrice: 0,
};
const ManageBasket = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      console.log(state, action);
      return {
        ...state,
        product: [
          ...state.product,
          {
            index: action.payload,
            number: action.numberOFproducts,
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
    default:
      return state;
  }
};

export { ManageBasket };
