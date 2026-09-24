import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import themeContext from "../context/themeContextValue.js";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const { state: themeState } = useContext(themeContext);
  const navigate = useNavigate();

  const isDark = themeState.theme === "dark";
  const pageStyle = {
    minHeight: "100vh",
    padding: "32px 20px",
    backgroundColor: isDark ? "#111827" : "#f3f4f6",
    color: isDark ? "#f9fafb" : "#111827",
    transition: "all 0.3s ease",
  };

  const cardStyle = {
    backgroundColor: isDark ? "#1f2937" : "#ffffff",
    color: isDark ? "#f9fafb" : "#111827",
    border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
    borderRadius: "16px",
    boxShadow: isDark
      ? "0 10px 20px rgba(0,0,0,0.25)"
      : "0 10px 20px rgba(15, 23, 42, 0.08)",
    padding: "18px",
    display: "flex",
    gap: "16px",
    alignItems: "center",
    marginBottom: "16px",
  };

  return (
    <div style={pageStyle}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ marginBottom: "24px" }}>Your Cart</h2>

        <div>
          {state.cart.length === 0 ? (
            <h3 style={{ opacity: 0.8 }}>Cart is empty</h3>
          ) : (
            state.cart.map((item, index) => (
              <div key={index} style={cardStyle}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "90px",
                    height: "90px",
                    objectFit: "contain",
                    borderRadius: "10px",
                    backgroundColor: isDark ? "#111827" : "#f9fafb",
                    padding: "8px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ margin: 0 }}>₹{Number(item.price).toFixed(2)}</p>
                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item.id,
                    })
                  }
                  style={{
                    backgroundColor: isDark ? "#ef4444" : "#dc2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
          <button onClick={() => navigate("/payment")}>
            proceed to payment
          </button>
        </div>
      </div>
    </div>
  );
}
