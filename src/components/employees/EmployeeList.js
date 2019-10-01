import React from "react";
import EmployeeSummary from "./EmployeeSummary";
import { Collection } from "react-materialize";

const EmployeeList = ({ employees }) => {
  let eList = [];
  employees &&
    employees.map(employee => {
      eList.push(<EmployeeSummary employee={employee} key={employee.id} />);
    });
  return (
    <Collection>
      <li className="collection-item">
        <h5>Employees</h5>
      </li>
      {eList}
    </Collection>
  );
};

export default EmployeeList;
