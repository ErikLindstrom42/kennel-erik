import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import CommonManager from '../../modules/CommonManager';

const type = "locations"
const LocationList = (props) => {
    console.log("Component Location List")

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        console.log("COMMON getLocations")
        return CommonManager.getAll(type).then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

    const deleteLocation = (id, type) => {
        CommonManager.delete(id, type)
            .then(() => CommonManager.getAll(type).then(setLocations));
    };

    useEffect(() => {
        console.log("useEffect")
        getLocations()
    }, [])

    return (
        <>
        <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/locations/new")}}>
      Open New Location
  </button>
</section>

        <div className="container-cards">
            {locations.map(location => <LocationCard
                key={location.id} //passes unique id
                spot={location} //passes entire location
                deleteLocation={deleteLocation} //passes delete function

            />)}
        </div>
        </>
    )

}

export default LocationList