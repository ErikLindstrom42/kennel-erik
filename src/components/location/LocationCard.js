import React from "react";
import './Location.css'
import { Link } from "react-router-dom";

const type = "locations"
const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require(`../../media/${props.spot.picture}`)} alt={props.spot.name} />
        </picture>
        <h3>
          Location: <span className="card-petname">{props.spot.location}</span>
        </h3>
        <p>Facility: {props.spot.name}</p>
        <button type="button" onClick={() => props.deleteLocation(props.spot.id, type)}>Burn Down</button>

        <Link to={`/locations/${props.spot.id}`}>
          <button>Details</button>
        </Link>

      </div>
    </div>
  );
};

export default LocationCard;