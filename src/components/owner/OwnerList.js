import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = () => {
    console.log("Component Owner List")

    const [owners, setOwners] = useState([])

    const getOwners = () => {
        console.log("getOwners")

        return OwnerManager.getAll().then(ownersFromAPI => {
            setOwners(ownersFromAPI)
        })
    }

useEffect(() => {
    console.log("useEffect")
    getOwners()
},[])

return (
    <div className="container-cards">
        {owners.map(owner => <OwnerCard key={owner.id} person={owner} />)}
    </div>
) 

}

export default OwnerList