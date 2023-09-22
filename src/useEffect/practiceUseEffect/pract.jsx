import { useState } from "react";
import { useEffect } from "react";

const Pract = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      // fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        setProducts(response.products);
      })

      .then((err) => console.log("err:", err));
  }, []);
  return (
    <>
      <div>pract</div>
      <div>show data</div>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pract;
