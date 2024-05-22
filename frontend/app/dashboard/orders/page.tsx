"use client";
import { useEffect, useState } from "react";
import { OrderProps } from "@/types";
import axiosInstance from "@/axios/axiosInstance";
import { decode } from "jsonwebtoken";

interface MyJwtPayload {
  userId: number;
}

const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const decoded = decode(token) as MyJwtPayload;
          const userId = decoded.userId;
          const response = await axiosInstance.get(`/orders/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.orderId} className="mb-4 p-4 border rounded-lg">
              <h2 className="text-xl font-semibold">
                Order ID: {order.orderId}
              </h2>
              <p>Total Price: {order.totalPrice} NOK</p>
              <p>Status: {order.orderStatus}</p>
              <ul className="mt-2">
                {order.OrderItems.map((item) => (
                  <li key={item.orderItemId}>
                    {item.vehicle.manufacturer} {item.vehicle.model} -{" "}
                    {item.quantity} pcs - {item.price} NOK
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
