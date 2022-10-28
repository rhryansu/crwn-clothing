import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isVisible, setIsVisible } = useContext(CartContext);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="w-11 h-11 relative flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <ShoppingIcon className="h-6 w-6" />
      <span className="absolute text-[10px] font-bold bottom-3">0</span>
    </div>
  );
};

export default CartIcon;
