import React, { useState, useEffect } from 'react';
import CommonManager from '../../modules/CommonManager';
import './LocationDetail.css'

const type = "locations"
const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", location: "" });

  useEffect(() => {
    //get(id,type) from CommonManager and hang on to the data; put it into state
    CommonManager.get(props.locationId, type)
      .then(location => {
        setLocation({
          name: location.name,
          location: location.location
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./van.jpg')} alt="My Van" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Location: {location.location}</p>
      </div>
    </div>
  );
}

export default LocationDetail