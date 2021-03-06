import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton.js";

const Order = props => {
  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton orderPizza={orderOne} />
    </li>
  );
};
export default Order;
