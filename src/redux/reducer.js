import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.warn("Reducer called", action);
  if (action === ADD_TO_CART) {
    return data;
  } else {
    return "no action called";
  }
};
