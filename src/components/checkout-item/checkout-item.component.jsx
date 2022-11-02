import React from "react";

const CheckoutItem = ({ item, otherProps }) => {

  return (
    <div className="grid grid-cols-5 justify-items-center place-items-center font-semibold border-b-2 p-4 h-40">
      <div className="w-[23%]">
        <img className="w-full h-full" src={item.imageUrl} alt={`${item.name}`}></img>
      </div>
      <h2>{item.name}</h2>
      <div>
        <span
          className="cursor-pointer mr-4 font-black"
          onClick={() => otherProps.removeItemFromCart(item)}
        >
          &lt;
        </span>
        <span>{item.quantity}</span>
        <span
          className="cursor-pointer ml-4 font-black"
          onClick={() => otherProps.addItemToCart(item)}
        >
          &gt;
        </span>
      </div>
      <span>${item.price * item.quantity}</span>
      <span className="cursor-pointer font-black" onClick={() => otherProps.cleanItem(item)}>X</span>
    </div>
  );
};

export default CheckoutItem;
