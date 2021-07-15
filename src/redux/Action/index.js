export const ADD = (data,np) => {
  return {
    type: "add",
    payload:data,
    numberOFproducts:np
  };
};

export const DELETE = () => {
  return {
    type: "detele",
  };
};
