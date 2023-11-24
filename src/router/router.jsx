import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Cart from "../pages/cart/Cart";
import Menu from "../pages/menu/Menu";
import { menuLoader } from "../pages/menu/loader";
import CreateOrder, { action } from "../pages/order/CreateOrder";
import Order from "../pages/order/Order";
import { orderLoader } from "../pages/order/loader";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: action,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

export default router;

