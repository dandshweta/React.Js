// import { useEffect } from "react";
// import axios from "axios"

// const fetchData=()=>{
// const [data,setData]=useState(null);
// useEffect(()=>{
//     const productData=()=>{}
//     try{
//         const getData=axios.get("https://fakestoreapi.com/products")
//         setProducts(getData.data);
//     } catch (err) {
//       console.log("err:", err);
//     }  }
//     load
// },[]);
//     return()

// }
// export default fetchData

import { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadAPIs = async () => {
      try {
        const productsData = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productsData.data);
      } catch (err) {
        console.log("err:", err);
      }
    };
    loadAPIs();
  }, []);

  console.log({ products });
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
export default FetchData;
