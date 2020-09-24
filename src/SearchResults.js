import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const SearchResults = props => {
  // const[rowState, setRowState] = useState("bookingResult")
  const [rowState, setRowState] = useState([]);
  const [customerId, setCustomerId] = useState();

  function selectRow(bookingId) {
    // const bookingIdText = event.currentTarget.id
    // const bookingId = Number(bookingIdText.replace("booking-id-", ""))
    //     if (rowState === "bookingResult"){
    // setRowState("allBookings")

    if (rowState.includes(bookingId)) {
      // Exclude bookingId from rowState
      setRowState(rowState.filter(id => id !== bookingId));
    } else {
      // Add bookingId to rowState
      setRowState(rowState.concat(bookingId));
    }
  }
  // else {
  //   setRowState("bookingResult")
  // }
  // console.log(selectRow)

  function handleShowProfileClick(bookingId) {
    // update customerId with booking number
    setCustomerId(bookingId);
  }

  return (
    <>
      <table className="Table-borders">
        <thead>
          <tr className="Table-borders">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Checkin Date</th>
            <th scope="col">Checkout Date</th>
            <th scope="col">Total Days</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>

        <tbody>
          {props.searchBookings.map(details => (
            /* <tr id={'booking-id-' + details.id} onClick={selectRow} className={rowState.includes(details.id) ? "table-active" : ""}> */
            /* key=index onClick=selectRow> */
            <tr
              onClick={() => selectRow(details.id)}
              className={rowState.includes(details.id) ? "table-active" : ""}
            >
              <td>{details.id}</td>
              <td>{details.title}</td>
              <td>{details.firstName}</td>
              <td>{details.surname}</td>
              <td>{details.email}</td>
              <td>{details.roomId}</td>
              <td>{details.checkInDate}</td>
              <td>{details.checkOutDate}</td>
              <td>
                {moment(details.checkOutDate).diff(
                  moment(details.checkInDate),
                  "days"
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShowProfileClick(details.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomerProfile id={customerId} />
    </>
  );
};
export default SearchResults;
