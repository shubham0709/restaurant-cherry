import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = (props) => {
  return (
    <div className="container divider">
      <div className="cards">
        {props.restaurants.map((elem) => (
          <Restaurant elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
