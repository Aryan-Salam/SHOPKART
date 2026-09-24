import { Link } from "react-router-dom";
import { useContext } from "react";
import themeContext from "../context/themeContextValue.js";
import { CartContext } from "../context/CartContext.jsx";

export default function Navbar() {
  const { state: themeState, dispatch } = useContext(themeContext);
  const { state: cartState } = useContext(CartContext);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "16px 40px",
        backgroundColor: themeState.theme === "dark" ? "#111827" : "#f3f4f6",
        color: themeState.theme === "dark" ? "#f9fafb" : "#111827",
        borderBottom: "1px solid rgba(148, 163, 184, 0.25)",
        flexWrap: "wrap",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: 800,
          fontSize: "1.8rem",
          letterSpacing: "-0.05em",
        }}
      >
        ShopKart
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </Link>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Registration
        </Link>
        <Link
          to="/product"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Product
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          Cart({cartState.cart.length})
        </Link>
      </div>

      <button
        className="theme-btn"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        aria-label={`Switch to ${themeState.theme === "light" ? "dark" : "light"} mode`}
        style={{
          padding: "10px 16px",
          borderRadius: "999px",
          border: "1px solid rgba(148, 163, 184, 0.4)",
          background: themeState.theme === "dark" ? "#1f2937" : "#ffffff",
          color: themeState.theme === "dark" ? "#f9fafb" : "#111827",
          cursor: "pointer",
        }}
      >
        {themeState.theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"}
      </button>
    </nav>
  );
}
