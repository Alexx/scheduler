import React from "react";
import EmployeeSummary from "./EmployeeSummary";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees }) => {
  return (
    <div className="project-list section">
      {employees &&
        employees.map(employee => {
          return (
            <Link to={/employee/ + employee.id} key={employee.id}>
              <EmployeeSummary employee={employee} />
            </Link>
          );
        })}
    </div>
  );
};

export default EmployeeList;
