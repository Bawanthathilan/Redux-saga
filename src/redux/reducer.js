import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART Condition", action);
      return [...data, action.data];
    default:
      return [];
  }
};
