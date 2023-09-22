import { useState, useEffect } from "react";
import "./useEffectAPIStyle.css";

const UseEffectAPI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("data:", data);
      })
      .catch((err) => console.log("Err:", err));
  }, []);

  return (
    <>
      <div>UseEffectAPI</div>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </>
  );
};

export default UseEffectAPI;
