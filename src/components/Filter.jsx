import React from "react";

const Filter = ({ restaurants, currentFilterBy, updateFilter }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        <div className="restaurant-option">Cost High to Lost</div>
        <div className="restaurant-option">Cost Lost to High</div>
        <div className="restaurant-option">Ratings</div>
        <div className="restaurant-option">Delivery Time</div>
        <div className="restaurant-option">Relevance</div>
      </div>
    </div>
  );
};

export default Filter;
