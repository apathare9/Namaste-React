import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-4 gap-4 ml-4">
      <div className="flex flex-row font-Whitney text-[#3e4152]">
        <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>

        <button
          className=" bg-[#171a29]  text-white rounded-md font-mullish font-bold  hover:bg-lightBlue500 ml-4   transition-all duration-200 py-[7px] px-[8px]"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex">
        {cartItems.map((cartItems) => (
          <FoodItem key={cartItems.id} {...cartItems} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
