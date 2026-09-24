import { useState, useEffect, useMemo } from "react";
import ProductCart from "../components/Productcart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const filteredProduct = useMemo(() => {
    return products.filter((product) => product.price < 150);
  }, [products]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((fetchError) => setError(fetchError.message));
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <main className="products-page">
      <h1>Products</h1>

      <div className="products-grid">
        {filteredProduct.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </main>
  );
}
