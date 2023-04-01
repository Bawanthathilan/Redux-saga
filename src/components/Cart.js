import React from "react";
import { Link } from "react-router-dom";

const cart = () => {
  return (
    <div>
      <Link to="/">Go to Products Link</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>0</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
