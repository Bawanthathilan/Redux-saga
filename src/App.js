import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const product = {
    name: "iphone",
    price: 1000,
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Addd to cart</button>
    </div>
  );
}

export default App;
