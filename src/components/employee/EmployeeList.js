import React, { useState, useEffect } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import CommonManager from '../../modules/CommonManager';

const type = "employees"
const EmployeeList = () => {
    console.log("Component employee List")
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
      console.log("COMMON getEmployees")
    // After the data comes back from the API, we
    //  use the setemployees function to update state
    return CommonManager.getAll(type).then(employeesFromAPI => {
      setEmployees(employeesFromAPI)
    });
  };

  const deleteEmployee = (id,type) => {
    CommonManager.delete(id,type)
      .then(() => CommonManager.getAll(type).then(setEmployees));
  };

  // got the employees from the API on the component's first render
  useEffect(() => {
      console.log("useEffect")
    getEmployees();
  }, []);

  // Finally we use map() to "loop over" the employees array to show a list of employee cards
  return (
    <div className="container-cards">
    {employees.map(employee => <EmployeeCard 
        key={employee.id} //passes unique id
        person={employee} //passes entire employee
        deleteEmployee={deleteEmployee} //passes delete function
/>)}
</div>
  );
};
export default EmployeeList


