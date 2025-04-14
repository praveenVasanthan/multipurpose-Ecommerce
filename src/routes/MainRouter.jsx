import React from "react";
import {
  Home,
  Products,
  Cart,
  Orders,
  Wishlist,
  ProductDetail,
} from "@pages/index.js";
import MainLayout from "@layouts/MainLayout";
import ErrorBoundary from "./ErrorBoundary";
import AccountLayout from "../layouts/AccountLayout";
import AccountDetails from "../pages/Profile/AccountDetails";
import AccountAddress from "../pages/Profile/AccountAddress";
import OrderHistory from "../pages/Profile/OrderHistory";
import CheckOutLayout from "../layouts/CheckOutLayout";
import { CheckOut, Confirmation } from "../pages";

const MainRouter = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/products",
            children: [
              { path: "", element: <Products /> },
              { path: ":id", element: <ProductDetail /> },
            ],
          },
          {
            path: "/cart",
            element: <CheckOutLayout />,
            children: [
              { path: "", element: <Cart /> },
              { path: "checkout", element: <CheckOut /> },
              { path: "confirmation", element: <Confirmation /> },
            ],
          },
          {
            path: "/orders",
            element: <Orders />,
          },
          {
            path: "/wishlist",
            element: <Wishlist />,
          },
          {
            path: "/profile",
            element: <AccountLayout />,
            children: [
              {
                path: "",
                element: <AccountDetails />,
              },
              {
                path: "address",
                element: <AccountAddress />,
              },
              {
                path: "orders",
                element: <OrderHistory />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default MainRouter;
