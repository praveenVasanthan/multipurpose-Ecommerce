import React from "react";
import {
  Home,
  Products,
  Cart,
  Orders,
  Wishlist,
  Profile,
} from "@pages/index.js";
import MainLayout from "@layouts/MainLayout";
import ErrorBoundary from "./ErrorBoundary";
import { ProductDetail } from "../pages";

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
            element: <Cart />,
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
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default MainRouter;
