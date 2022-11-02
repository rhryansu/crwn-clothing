import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cleanItem } =
    useContext(CartContext);

  const otherProps = { addItemToCart, removeItemFromCart, cleanItem };

  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl">Checkout</h1>
      <div className="flex flex-col mt-10">
        <div className="grid grid-cols-5 justify-items-center font-bold text-lg border-b-2 p-4">
          <h2>Product</h2>
          <h2>Description</h2>
          <h2>Quantity</h2>
          <h2>Price</h2>
          <h2>Remove</h2>
        </div>
        <div className="flex flex-col">
          {cartItems.map((item) => {
            return (
              <CheckoutItem key={item.id} item={item} otherProps={otherProps} />
            );
          })}
        </div>
      </div>
      <div className="font-black text-2xl float-right pb-10 pr-4">
        Total: $
        {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}
      </div>
    </div>
  );
};

export default Checkout;
