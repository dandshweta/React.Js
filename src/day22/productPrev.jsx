import { useEffect, useState } from "react";
import { RiseLoader } from "react-spinners";

const ProductListWithFilters2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false); // Track whether the cart is open

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
      return currentWordLC.search(searchLc) !== -1;
    });
    setFilteredProducts(filteredList);
  }, [search, products]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
  };

  // Toggle the cart open/close
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <h1>My Product</h1>
      <div className="search-box">
        <input
          style={{
            width: "1080px",
            padding: "12px",
            marginBottom: "16px",
            backgroundColor: "#e9e9e9",
          }}
          type="search"
          placeholder="Search your product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={toggleCart}>My Cart ({cart.length})</button>
        {isCartOpen && (
          <div className="cart">
            <h2>My Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <div style={{ width: 140 }} key={index}>
                  {/* {item.title} - ${item.price} */}
                  {/* <div style={{ width: 140 }} key={item.id}> */}
                  <img
                    width={70}
                    height={70}
                    src={item.image}
                    alt={item.title}
                  />
                  <p style={{ fontSize: 11 }}>{item.title}</p>
                  <p>${item.price}</p>
                </div>
              ))}
            </ul>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
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

export default ProductListWithFilters2;
