
import React from "react";
import AnimalCard from "./animal/AnimalCard";
import "./Kennel.css";
import EmployeeCard from "./employee/EmployeeCard"
import LocationCard from "./location/LocationCard"
import OwnerCard from "./owner/OwnerCard"

const Kennel = () => {
  return (
    <div>
      <div>
        <h2>
          Student Kennels
          <br />
          <small>Loving care when you're not there.</small>
        </h2>
        <address>
          Visit Us at the Nashville North Location
          <br />
          500 Puppy Way
        </address>
      </div>
      <div className="container-cards">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>
      <div>
        <EmployeeCard />
      </div>
      <div>
        <LocationCard />
      </div>
      <div>
        <OwnerCard />
      </div>

    </div>
  );
};

export default Kennel;