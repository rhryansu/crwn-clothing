import React from "react";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="flex flex-col m-8">
      <h2 className="mb-5">
        <Link to={title} className="font-black uppercase cursor-pointer text-3xl">{title}</Link>
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
