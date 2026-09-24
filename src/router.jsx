import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/success",
        element: <OrderSuccess />,
      },
    ],
  },
]);

export default router;
