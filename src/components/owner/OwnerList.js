import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import CommonManager from '../../modules/CommonManager';

const OwnerList = () => {
    console.log("Component Owner List")

    const [owners, setOwners] = useState([])

    const getOwners = () => {
        console.log("COMMON getOwners")
        const type = "owners"

        return CommonManager.getAll(type).then(ownersFromAPI => {
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