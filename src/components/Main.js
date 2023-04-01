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

  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Addd to cart</button>

      <br />
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove from cart
        </button>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Get product list
        </button>
      </div>

      <h1>Product List</h1>
    </div>
  );
}

export default Main;
