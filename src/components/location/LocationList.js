import React, { useState, useEffect } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import CommonManager from '../../modules/CommonManager';

const LocationList = () => {
    console.log("Component Location List")

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        console.log("COMMON getLocations")
        const type = "locations"
        return CommonManager.getAll(type).then(locationsFromAPI => {
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