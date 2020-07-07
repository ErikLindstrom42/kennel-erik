import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./bubbles2.jpg")} alt="Bubbles" />
        </picture>
        <h3>
          Name: <span className="card-petname">Bubbles</span>
        </h3>
        <p>Employee of the Month</p>
      </div>
    </div>
  );
};

export default EmployeeCard;