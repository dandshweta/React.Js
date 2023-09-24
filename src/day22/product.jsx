import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";
import "./ProductStyle.css";

const ProductListWithFilters4 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false); // Track whether to show the cart

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredList = products.filter((item) => {
      const searchLc = search.toLowerCase();
      const currentWordLC = item.title.toLowerCase();
      return currentWordLC.includes(searchLc);
    });

    setFilteredProducts(filteredList);
  }, [search, products]);

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <div>
      <h1>My Product</h1>
      <div className="search-box">
        <input
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            backgroundColor: "#e9e9e9",
          }}
          type="search"
          placeholder="Search your product"
          value={search}
          onChange={handleSearchInputChange}
        />
        <button onClick={() => setShowCart(!showCart)}>
          My Cart ({cart.length})
        </button>
      </div>
      {showCart && (
        <div>
          <h2>My Cart</h2>
          {cart.map((item) => (
            <div key={item.id}>
              <img width={70} height={70} src={item.image} alt={item.title} />
              <p style={{ fontSize: 11 }}>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {isLoading ? (
          <RiseLoader color="red" />
        ) : (
          filteredProducts.map((item) => {
            return (
              <div style={{ width: 140 }} key={item.id}>
                <img width={70} height={70} src={item.image} alt={item.title} />
                <p style={{ fontSize: 11 }}>{item.title}</p>
                <p>${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductListWithFilters4;
