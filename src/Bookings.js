import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    // filter bookings
    const filteredBookings = bookings.filter(booking => {
      //kee the booking if firstName or surname matches searchVal
      return (
        // booking.firstName.toLowerCase() === searchVal.toLowerCase() || booking.surname.toLowerCase() === searchVal.toLowerCase()
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    //Update bookings in the UI
    setBookings(filteredBookings);
  };

  //   function filterResults(value) {
  //     return (
  //       value.firstName.toUpperCase() === searchVal ||
  //       value.surname.toUpperCase() === searchVal
  //     );
  //   }
  // };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults searchBookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
