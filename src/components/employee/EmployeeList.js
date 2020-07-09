import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import CommonManager from '../../modules/CommonManager';

const EmployeeList = () => {
    console.log("Component employee List")
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
      console.log("COMMON getEmployees")
      const type = "employees"
    // After the data comes back from the API, we
    //  use the setemployees function to update state
    return CommonManager.getAll(type).then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <div className="container-cards">
      {employees.map(employee => <EmployeeCard key={employee.id} person={employee} ID={employee.id}/>)}
    </div>
  );
};
export default EmployeeList


