import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCart({ id, title, price, image }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>

      <p className="product-price">${Number(price).toFixed(2)}</p>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { id, title, price, image },
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCart;
