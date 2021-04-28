import React from "react";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
  console.log(props);
  return (
    <div class="row my-4">
      <div class="col-sm-8 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.restaurant.attributes.name}</h5>
            <p class="card-text">{props.restaurant.attributes.type_of}</p>
            <p class="card-text">{props.restaurant.attributes.description}</p>
            <Link to="/" className="btn btn-primary">
              View Restaurant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
