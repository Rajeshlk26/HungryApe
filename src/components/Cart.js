import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

// selecting and subscribing specific items of the store instead of whole store

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return ( 
    <div className="text-center m-4 p-4">
      <div className="flex justify-evenly p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={handleClearCart} className="p-2 ml-4 border border-solid border-black rounded-xl hover:bg-white hover:bg-orange-100 transition duration-300">
        Clear cart X</ button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
