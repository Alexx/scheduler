import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { employee, auth } = props;

  if (!auth.uid) return <Redirect to="/login" />;

  if (employee) {
    return (
      <div className="container section employee-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {employee.firstName} {employee.lastName}
            </span>
            <p>{employee.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {employee.authorFirstName} {employee.authorLastName}
            </div>
            <div>
              {moment(employee.createdAt.toDate().toString()).calendar()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading employee...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const employees = state.firestore.data.employees;
  const employee = employees ? employees[id] : null;
  return {
    employee: employee,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "employees" }])
)(ProjectDetails);
