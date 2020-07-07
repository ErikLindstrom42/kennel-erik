import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./van.jpg")} alt="My Dog" />
        </picture>
        <h3>
          Location: <span className="card-petname">Down By the River</span>
        </h3>
        <p>Facility: Van</p>
      </div>
    </div>
  );
};

export default LocationCard;