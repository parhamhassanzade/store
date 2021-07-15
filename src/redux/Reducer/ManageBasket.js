let initialState = {
  product: [],
  ManageBasket: 0,
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
          },
        ],
        ManageBasket: state.ManageBasket + 1,
      };

    case "delete":
      return state - 1;
    default:
      return state;
  }
};

export { ManageBasket };
