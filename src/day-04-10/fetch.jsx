import { useEffect, useState } from "react";

const ProductList1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const parsedResult = await result.json();
    setProducts(parsedResult);
  };

  return (
    <div>
      <h1>My Products</h1>
      <ul>
        {products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList1;
