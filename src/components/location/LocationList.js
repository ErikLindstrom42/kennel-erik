import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
    console.log("Component Location List")

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        console.log("getLocations")

        return LocationManager.getAll().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        })
    }

useEffect(() => {
    console.log("useEffect")
    getLocations()
},[])

return (
    <div className="container-cards">
        {locations.map(location => <LocationCard key={location.id} spot={location} />)}
    </div>
) 

}

export default LocationList