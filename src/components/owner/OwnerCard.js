import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./bubbles.jpg")} alt="Bubbles" />
        </picture>
        <h3>
          Name: <span className="card-petname">Bubbles</span>
        </h3>
        <p>Owner of the Month</p>
      </div>
    </div>
  );
};

export default OwnerCard;