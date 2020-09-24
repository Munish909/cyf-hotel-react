import React from "react";
import Heading from "./Heading.js";
import TouristInfoCards from "./TouristInfoCards.js";
import Footer from "./Footer.js";
import Restaurant from "./Restaurant.js";
import Bookings from "./Bookings.js";
// import SearchResults from "./SearchResults.js";
import "./App.css";

const addr = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings SearchResults />
      <Restaurant />
      <Footer address={addr} />
    </div>
  );
};

export default App;
