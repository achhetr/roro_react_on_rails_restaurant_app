import React from "react";

const Restaurant = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="card text-center mt-4">
            <div class="card-header">{/* <%= @restaurant.type_of %> */}</div>
            <div class="card-body">
              {/* <h5 class="card-title"><%= @restaurant.name %></h5> */}
              {/* <p class="card-text"><%= @restaurant.description %></p> */}
              {/* <span class="badge badge-success p-2">Ratings <%= all_ratings_sum(@restaurant)%></span> */}
              {/* <span class="badge badge-info p-2">Capacity of <%= @restaurant.capacity%></span> */}
            </div>
          </div>
        </div>
        <div class="col-sm-4">{/* <%= render  "review_form" %> */}</div>
      </div>
      {/* <% if @reviews.count > 0 %> */}
      <div class="row mt-4">
        <div class="col-sm-8 mr-auto">{/* <%= render "review_cards" %> */}</div>
      </div>
      {/* <% end %> */}
    </div>
  );
};

export default Restaurant;
