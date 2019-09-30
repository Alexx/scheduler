import React from "react";
import EmployeeSummary from "./EmployeeSummary";
import { Link } from "react-router-dom";
import { Collection } from "react-materialize";

const EmployeeList = ({ employees }) => {
  let eList = [];
  employees &&
    employees.map(employee => {
      eList.push(<EmployeeSummary employee={employee} />);
    });
  return (
    <Collection>
      <li className="collection-item">
        <h4>Employees</h4>
      </li>
      {eList}
    </Collection>
  );
};

export default EmployeeList;
