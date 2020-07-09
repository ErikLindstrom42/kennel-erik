import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';

import CommonManager from '../../modules/CommonManager'

const AnimalList = () => {
    console.log("Component Animal List")
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
      console.log("COMMON getAnimals")
      const type = "animals"
      
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return CommonManager.getAll(type).then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} dog={animal} ID={animal.id}/>)}
    </div>
  );
};
export default AnimalList