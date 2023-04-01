import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...data, action.data];

    case REMOVE_TO_CART:
      data.length = data.length ? data.length - 1 : [];
      return [...data];

    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
