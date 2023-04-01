import React, { useEffect } from "react";
import { addToCart, removeToCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  let productData = useSelector((state) => state.productData);
  console.warn(productData);

  const product = {
    name: "iphone",
    price: 1000,
  };

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div> 

      <div className="product-container">
        {productData.map((item) => (
          <div className="product-item">
            <img src={item.photo} alt="" />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
