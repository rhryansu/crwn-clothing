import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  return (
    <div
      name="product-card-container"
      className="group w-full flex flex-col h-[350px] items-center relative"
    >
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-[95%] object-cover mb-1 group-hover:opacity-80 transition ease-in-out duration-300"
      />
      <div name="footer" className="w-full h-[5%] flex justify-between text-lg">
        <span name="name" className="w-[90%] mb-[15px] font-serif">
          {name}
        </span>
        <span name="price" className="w-[10%] font-serif">
          ${price}
        </span>
      </div>
      <div className="group-hover:bg-white/80 group-hover:border border-black opacity-0 absolute top-64 group-hover:opacity-80 w-[80%] h-[10%]">
        <button
          onClick={handleAddToCart}
          type="button"
          name="add-to-cart"
          className=" w-full h-full hover:bg-black hover:text-white border hover:border-white transition ease-in-out duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
