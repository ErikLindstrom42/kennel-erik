import React from "react";
import './Animal.css'
import { Link } from "react-router-dom";

const type = "animals"
const AnimalCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
        <img src={require(`./${props.dog.picture}`)} alt={props.dog.name} />
        </picture>
        <h3>Name: <span className="card-petname">
          {props.dog.name}
        </span></h3>
        <p>Breed: {props.dog.breed}</p>
        <button type="button" onClick={() => props.deleteAnimal(props.dog.id, type)}>Discharge</button>

        <Link to={`/animals/${props.dog.id}`}>
          <button>Details</button>
          </Link>

      </div>
    </div>
  );
}


export default AnimalCard;

