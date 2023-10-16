import { useState, useEffect } from "react";

function ProductsShow() {
  const [isLoading, setIsLoading] = useState(true);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowProducts(true);
    }, 3000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : showProducts ? (
        <ProductList />
      ) : null}
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <h4>Products:</h4>
    </div>
  );
}

export default ProductsShow;
