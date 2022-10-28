import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import React from "react";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  
  const { products } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-12 px-10">
      {products.map(({ id, name, price, imageUrl }) => (
        <ProductCard key={id} product={{ id, name, price, imageUrl }} />
      ))}
    </div>
  );
};

export default Shop;
