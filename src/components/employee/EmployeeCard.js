import React from "react";
import './Employee.css'

const type = "employees"
const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./bubbles2.jpg")} alt="Bubbles" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.person.name}</span>
        </h3>
        <p>{props.person.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.person.id,type)}>Fire</button>
      </div>
    </div>
  );
};

export default EmployeeCard;