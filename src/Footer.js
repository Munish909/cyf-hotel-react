import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.address.map((details, index) => {
        return <li key={index}>{details}</li>;
      })}
    </ul>
  );
};

export default Footer;
