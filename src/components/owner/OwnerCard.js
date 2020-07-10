import React from "react";
import './Owner.css'

const type = "owners"
const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./bubbles.jpg")} alt="Bubbles" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.person.name}</span>
        </h3>
        <p>{props.person.title}</p>
        <button type="button" onClick={() => props.deleteOwner(props.person.id,type)}>Disappear</button>
      </div>
    </div>
  );
};

export default OwnerCard;