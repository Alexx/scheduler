import React from "react";
import moment from "moment";
import { CollectionItem } from "react-materialize";
import { Link } from "react-router-dom";

const EmployeeSummary = ({ employee }) => {
  return (
    <CollectionItem className="avatar">
      <Link to={/employee/ + employee.id} key={employee.id}>
        <i className="material-icons circle">account_circle</i>
        <div className="employee-list-item">
          <span className="title">
            {employee.firstName} {employee.lastName}
          </span>
          <p>{moment(employee.createdAt.toDate().toString()).calendar()}</p>
        </div>
      </Link>
    </CollectionItem>
  );
};

export default EmployeeSummary;
