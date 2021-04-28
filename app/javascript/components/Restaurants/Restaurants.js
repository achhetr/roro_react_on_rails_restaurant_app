import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/restaurants")
      .then((response) => setRestaurants(response.data.data));
  }, []);

  return (
    <div class="container">
      <h1 class="my-4 text-center">Welcome to Yummy Restaurants near you..</h1>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
