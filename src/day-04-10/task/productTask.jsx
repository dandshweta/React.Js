// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// const ProductShow = () => {
//   const [product, setProducts] = useState();
//   const { productId } = useParams();

//   useEffect(() => {
//     loadProducts();
//   }, [productId]);

//   const loadProducts = async () => {
//     const result = await fetch("https://fakestoreapi.com/products");
//     const parsedResult = await result.json();
//     setProducts(parsedResult);
//   };

//   return (
//     <div>
//       <h1>Product</h1>

//       <div>
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <Link to={`/products/${product.id}`}>product Details</Link>
//       </div>
//     </div>
//   );
// };

// export default ProductShow;
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

const ProductShow = () => {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    loadProducts();
  }, [productId]);

  const loadProducts = async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    const parsedResult = await result.json();
    setProducts(parsedResult);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            // <Link key={item.id} to={`/products/${item.id}`}>
            //   <li>{item.title}</li>
            // </Link>
            // <div>
            //    <h2>{product.title}</h2>
            //   <p>{product.description}</p>
            //    <p>Price: ${product.price}</p>

            <Link key={product.id} to={`/products/${product.id}`}>
              product Details
            </Link>

            // </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductShow;
