import React from "react";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./van.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Location: <span className="card-petname">{props.spot.location}</span>
        </h3>
        <p>Facility: {props.spot.name}</p>
      </div>
    </div>
  );
};

export default LocationCard;