import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      data = data.filter((item) => item.id !== action.data.id);
      return [...data, action.data];

    case REMOVE_TO_CART:
      const remainingData = data.filter((item) => item.id !== action.data);
      return [...remainingData];

    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
