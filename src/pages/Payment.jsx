import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Payment() {
  const { state } = useContext(CartContext);
  const navigate = useNavigate();

  const total = state.cart
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handlePayment = () => {
    alert("Payment successful");
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment</h2>

        <p>Total Amount: ₹{total}</p>

        <input type="text" placeholder="Card Number" />

        <input type="text" placeholder="CVV" />

        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
}
