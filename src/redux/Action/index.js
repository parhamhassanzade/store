export const ADD = (data, np) => {
  return {
    type: "add",
    payload: data,
    numberOFproducts: np,
  };
};

export const DELETE = (PN, PP) => {
  return {
    type: "detele",
    productName: PN,
    productPrice: PP,
  };
};

export const usersInfo = (UI) => {
  return {
    type: "info",
    UserInformation: UI,
  };
};
