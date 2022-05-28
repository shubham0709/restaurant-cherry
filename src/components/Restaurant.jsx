import React from "react";

const Restaurant = ({ elem }) => {
  return (
    <div className="card">
      <img width="254" height="160px" src={elem.image} />
      <div className="restaurant-details">
        <div className="restaurant-title">{elem.name}</div>
        <div className="restaurant-subtitle">{elem.category.join(", ")}</div>
      </div>
      <div className="restaurant-info">
        <div className="restaurant-ratings">
          <i className="material-icons star-icon">star</i>
          {elem.rating}
        </div>
        .
        <div className="restaurant-delivery-timings">
          {elem.deliveryTimings}
        </div>{" "}
        .
        <div className="restaurant-cost-for-two">
          ₹{elem.cost_for_two} FOR TWO
        </div>
      </div>
      <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">
          {elem.offer[0]} | {elem.offer[1]}
        </span>
      </div>
    </div>
  );
};

export default Restaurant;
