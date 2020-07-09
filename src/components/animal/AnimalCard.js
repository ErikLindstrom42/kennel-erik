import React from "react";
import './Animal.css'

const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.dog.name}
        </span></h3>
        <p>Breed: {props.dog.breed}</p>
        <button type="button" onClick={() => props.deleteAnimal(props.dog.id,"animals")}>Discharge</button>
      </div>
    </div>
  );
}


export default AnimalCard;

