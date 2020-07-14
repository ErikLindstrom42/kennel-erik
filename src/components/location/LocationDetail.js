import React, { useState, useEffect } from 'react';
import CommonManager from '../../modules/CommonManager';
import './LocationDetail.css'

const type = "locations"
const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", location: "", picture:"" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id,type) from CommonManager and hang on to the data; put it into state
    CommonManager.get(props.locationId, type)
      .then(location => {
        setLocation({
          name: location.name,
          location: location.location,
          picture: location.picture
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
      setIsLoading(true)
      CommonManager.delete(props.locationId,type).then(() =>
      props.history.push(type)
      )
  }

  return (
    <div className="card">
      <div className="card-content">
      { (location.picture !== "") && 
        <picture>
            <img src={require(`../../media/${location.picture}`)} alt={location.name} />
        </picture>
        }
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <p>Location: {location.location}</p>
        <button type = "button" disabled={isLoading} onClick={handleDelete}>
            Burn Down
        </button>
      </div>
    </div>
  );
}

export default LocationDetail