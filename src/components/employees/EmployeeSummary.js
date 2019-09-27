import React from "react";
import moment from "moment";

const EmployeeSummary = ({ employee }) => {
  return (
    <div className="card z-depth-0 employee-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">
          {employee.firstName} {employee.lastName}
        </span>
        <p className="grey-text">
          {moment(employee.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default EmployeeSummary;
