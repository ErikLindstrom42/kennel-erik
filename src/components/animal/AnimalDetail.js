import React, { useState, useEffect } from 'react';
import CommonManager from '../../modules/CommonManager';
import './AnimalDetail.css'

const type = "animals"
const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", picture: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id, type) from CommonManager and hang on to the data; put it into state
    CommonManager.get(props.animalId, type)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          picture: animal.picture
        });
        setIsLoading(false)
      });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in CommonManager and re-direct to the animal list.
    setIsLoading(true);
    CommonManager.delete(props.animalId, type).then(() =>
      props.history.push(type)
    );
  };
  return (
    <div className="card">
      <div className="card-content">
      { (animal.picture !== "") && 
        <picture>
            <img src={require(`./${animal.picture}`)} alt={animal.name} />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail