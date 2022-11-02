import React, { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isVisible, setIsVisible } = useContext(CartContext);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
    setIsVisible(!isVisible);
  };

  return (
    <div className="absolute w-60 h-[340px] flex flex-col p-5 border border-black bg-white top-16 right-10 z-[5]">
      <div className="h-60 flex flex-col overflow-scroll">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-auto p-2 border border-white bg-black text-white hover:bg-white hover:text-black transition hover:border-black ease-in-out duration-300"
      >
        Go to Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
