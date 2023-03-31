import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn(result);

  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.length}</span>
      </div>
    </div>
  );
};

export default Header;
