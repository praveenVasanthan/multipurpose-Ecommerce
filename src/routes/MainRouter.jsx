import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import AccountLayout from "@layouts/AccountLayout";
import CheckOutLayout from "@layouts/CheckOutLayout";
import ErrorBoundary from "./ErrorBoundary";
import {
  Home,
  Products,
  ProductDetail,
  Cart,
  CheckOut,
  Confirmation,
  Orders,
  Wishlist,
  Contact,
} from "@pages/index.js";
import AccountDetails from "@pages/Profile/AccountDetails";
import AccountAddress from "@pages/Profile/AccountAddress";
import OrderHistory from "@pages/Profile/OrderHistory";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    handle: {
      crumb: () => (
        <Link to="/" className="body-small link">
          Home
        </Link>
      ),
    },
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        handle: {
          crumb: () => (
            <Link to="/products" className="body-small link">
              Products
            </Link>
          ),
        },
        children: [
          {
            path: ":category",
            element: <Products />,
            handle: {
              crumb: () => <span className="body-small">Category</span>,
            },
          },
        ],
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        handle: {
          crumb: () => <span className="body-small">Product Detail</span>,
        },
      },
      {
        path: "cart",
        element: <CheckOutLayout />,
        handle: {
          crumb: () => (
            <Link to="/cart" className="body-small link">
              Cart
            </Link>
          ),
        },
        children: [
          {
            index: true,
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <CheckOut />,
            handle: {
              crumb: () => <span className="body-small">Checkout</span>,
            },
          },
          {
            path: "confirmation",
            element: <Confirmation />,
            handle: {
              crumb: () => <span className="body-small">Confirmation</span>,
            },
          },
        ],
      },
      {
        path: "orders",
        element: <Orders />,
        handle: {
          crumb: () => (
            <Link to="/orders" className="body-small link">
              Orders
            </Link>
          ),
        },
      },
      {
        path: "wishlist",
        element: <Wishlist />,
        handle: {
          crumb: () => (
            <Link to="/wishlist" className="body-small link">
              Wishlist
            </Link>
          ),
        },
      },
      {
        path: "contact",
        element: <Contact />,
        handle: {
          crumb: () => (
            <Link to="/contact" className="body-small link">
              Contact
            </Link>
          ),
        },
      },
      {
        path: "profile",
        element: <AccountLayout />,
        handle: {
          crumb: () => (
            <Link to="/profile" className="body-small link">
              Profile
            </Link>
          ),
        },
        children: [
          {
            index: true,
            element: <AccountDetails />,
            handle: {
              crumb: () => <span className="body-small">Account Details</span>,
            },
          },
          {
            path: "address",
            element: <AccountAddress />,
            handle: {
              crumb: () => <span className="body-small">Address</span>,
            },
          },
          {
            path: "orders",
            element: <OrderHistory />,
            handle: {
              crumb: () => <span className="body-small">Order History</span>,
            },
          },
        ],
      },
    ],
  },
]);

export default MainRouter;
