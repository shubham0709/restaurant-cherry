import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Offers from "./components/Offers";
import Restaurants from "./components/Restaurants";
import userInfo from "./data/userInfo";
import offers from "./data/offers";
import restaurants from "./data/restaurants";
import { useState } from "react";

const filters = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
};

function App() {
  const [filterBy, setFilterBy] = useState("");
  const [data, setData] = useState(restaurants);

  const updateFilter = (newFilter) => {
    //TODO
  };

  return (
    <div>
      <Navbar {...userInfo.location}></Navbar>
      <Offers offers={offers} />
      <section className="near-you">
        <Filter />
        <Restaurants
          restaurants={data}
          currentFilterBy={filterBy}
          updateFilter={updateFilter}
        />
      </section>
    </div>
  );
}

export default App;
