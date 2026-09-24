import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>Order Placed Successfully</h1>
        <button onClick={() => UNSAFE_NavigationContext("/")}>
          Go to home
        </button>
      </div>
    </div>
  );
}
