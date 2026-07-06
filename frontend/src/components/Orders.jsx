import React, { useEffect, useState } from "react";
import API from "../api/api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/my")
      .then((res) => setOrders(res.data))
      .catch(() => setOrders([]));
  }, []);

  return (
    <div>
      <h1 className="page-title">Your Orders</h1>
      {orders.map((o) => (
        <div className="order-card" key={o._id}>
          <div className="order-header">
            <div>
              <div className="order-id">Order #{o._id.slice(-6)}</div>
            </div>

            <div className="order-date">
              {new Date(o.createdAt).toLocaleString()}
            </div>
          </div>

          {o.items.map((it) => (
            <div key={it.menuItem?._id || Math.random()} className="order-item">
              <span>
                {it.qty} × {it.menuItem?.name || "Item"}
              </span>

              <strong>₹{(it.qty * it.price).toFixed(2)}</strong>
            </div>
          ))}

          <div className="order-footer">
            <div className="order-total">₹{o.total.toFixed(2)}</div>

            <span className="status">{o.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
