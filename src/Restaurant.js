import React from "react";
// import RestaurantButton from './RestaurantButton.js';
import Order from "./Order.js";

const Restaurant = () => {
  // const pizzas = 0;

  return (
    <div className="container">
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocklate cake" />
        {/* <li>
        Pizzas: {orders} <RestaurantButton orderPizza = {orderOne} />
          {/* Pizzas: {orders} <button className="btn btn-primary" onClick={orderOne}>Add</button> */}
        {/* Pizzas: {pizzas} <button className="btn btn-primary">Add</button> */}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default Restaurant;
