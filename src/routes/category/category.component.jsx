import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  console.log('/render/re-rendering component');
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProducts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="m-8">
      <h2 className="font-black uppercase text-3xl mb-5 text-center">
        {category}
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Category;
