
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

//only include these once they are built - previous practice exercise



import AnimalList from "./animal/AnimalList"
import AnimalDetail from "./animal/AnimalDetail"
import AnimalForm from "./animal/AnimalForm"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import LocationDetail from "./location/LocationDetail"
import LocationForm from "./location/LocationForm"
import OwnerList from "./owner/OwnerList"
import Login from "./auth/Login";


const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
const ApplicationViews = () => {
    return (
        <React.Fragment>
        <Route path="/login" component={Login} />
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />


            
            <Route path="/animals/:animalId(\d+)" render={(props) => {
                // Pass the animalId to the AnimalDetailComponent
                return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
            }} />
            <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props} />
            }} />

            <Route exact path="/animals" render={props => {
                if (isAuthenticated()) {
                    return <AnimalList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }} />

            <Route
                exact path="/locations" render={props => {
                    return <LocationList {...props} />;
                }} />
            <Route path="/locations/:locationId(\d+)" render={(props) => {
                return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
            }} />
            <Route path="/locations/new" render={(props) => {
                return <LocationForm {...props} />
            }} />



            <Route
                path="/employees"
                render={props => {
                    return <EmployeeList />;
                }}
            />

            <Route
                path="/owners"
                render={props => {
                    return <OwnerList />;
                }}
            />

        </React.Fragment>
    );
};

export default ApplicationViews;
