import { useEffect, useParams, useState } from "react";
import { Link } from "react-router-dom";

const ProductShowDetails = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const parsedResult = await result.json();
    setProducts(parsedResult);
  };

  return (
    <>
      <div>ProductShowDetails</div>
      <div>
        <h1>My Product Details: {params.productId}</h1>
        {products.map((item) => {
          return (
            <Link key={item.id} to={`/products/${item.id}`}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductShowDetails;
