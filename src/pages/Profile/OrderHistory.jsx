import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Sample static order data
    const orders = [
      {
        id: "#12345",
        date: "15 May 2024",
        status: "Delivered",
        total: "$690 / 3 items",
        statusClass: "text-delivered",
      },
      {
        id: "#12346",
        date: "16 May 2024",
        status: "Delivered",
        total: "$420 / 2 items",
        statusClass: "text-delivered",
      },
      {
        id: "#12347",
        date: "17 May 2024",
        status: "On The Way",
        total: "$320 / 1 item",
        statusClass: "text-on-the-way",
      },
    ];

    // Sort to place "On The Way" first
    const sortedOrders = [...orders].sort((a, b) => {
      if (a.status === "On The Way" && b.status !== "On The Way") return -1;
      if (a.status !== "On The Way" && b.status === "On The Way") return 1;
      return 0; // keep order otherwise
    });

    setOrderHistory(sortedOrders);
  }, []);

  return (
    <div className="my-account-content account-dashboard">
      <h4 className="fw-semibold mb-20">Order History</h4>
      <div className="tf-order_history-table">
        <table className="table_def">
          <thead>
            <tr>
              <th className="title-sidebar fw-medium">Order ID</th>
              <th className="title-sidebar fw-medium">Date</th>
              <th className="title-sidebar fw-medium">Status</th>
              <th className="title-sidebar fw-medium">Total</th>
              <th className="title-sidebar fw-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr className="td-order-item" key={index}>
                <td className="body-text-3">{order.id}</td>
                <td className="body-text-3">{order.date}</td>
                <td className={`body-text-3 ${order.statusClass}`}>
                  {order.status}
                </td>
                <td className="body-text-3">{order.total}</td>
                <td>
                  <Link
                    to={"/orders"}
                    className="tf-btn btn-small d-inline-flex"
                  >
                    <span className="text-white">Detail</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
