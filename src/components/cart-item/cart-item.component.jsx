import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="flex w-full h-[80px] mb-4">
      <img src={imageUrl} alt={`${name}`} className="w-[30%]" />
      <div className="w-[90%] flex flex-col items-start justify-evenly px-3">
        <h2 className="text-base font-medium">{name}</h2>
        <span className="font-light">${price}</span>
        <span className="font-light">x{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
