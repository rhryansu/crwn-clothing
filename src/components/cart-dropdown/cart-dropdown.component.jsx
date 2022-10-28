import React from "react";

const CartDropdown = () => {

  return (
    <div
      className='absolute w-60 h-[340px] flex flex-col p-5 border border-black bg-white top-16 right-10 z-[5]'
    >
      <div className="h-60 flex flex-col overflow-scroll">Some Items</div>
      <button className="mt-auto p-2 border border-white bg-black text-white hover:bg-white hover:text-black transition hover:border-black ease-in-out duration-300">
        Go to Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
