"use client";
import Container from "@/components/ui/Container";
import axios from "axios";
import React, { useState } from "react";

const orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data.orders);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  };

  return (
    <Container>
      <div className="px-7 py-6">
        <h1 className="font-bold text-4xl">My Orders</h1>
      </div>

      <div className="flex-col px-7 min-h-screen">
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                {/* Display order details */}
                <p>Order ID: {order.id}</p>
                <p>Order Total: {order.total}</p>
                {/* Add more details as needed */}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )}
      </div>
    </Container>
  );
};

export default orders;
