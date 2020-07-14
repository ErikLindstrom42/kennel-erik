import React, { useState } from 'react';
import CommonManager from '../../modules/CommonManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", location: "", picture:"van.jpg" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location      object, invoke the CommonManager post method, and redirect to the full animal list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "" || location.breed === "") {
      window.alert("Please input a name and description for the location");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      CommonManager.postLocation(location)
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Description"
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm