import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';

import CommonManager from '../../modules/CommonManager'
const type = "animals"
const AnimalList = (props) => {
    console.log("Component Animal List")
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
      console.log("COMMON getAnimals")
      
      
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return CommonManager.getAll(type).then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const deleteAnimal = (id,type) => {
    CommonManager.delete(id,type)
      .then(() => CommonManager.getAll(type).then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/animals/new")}}>
      Admit Animal
  </button>
</section>

    <div className="container-cards">
      {animals.map(animal => <AnimalCard 
          key={animal.id} //passes unique id
          dog={animal} //passes entire animal
          deleteAnimal={deleteAnimal} //passes delete function

          />)}
    </div>
    </>
  );
};
export default AnimalList