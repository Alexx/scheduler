import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";
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
            <p className="ava-text">Availability</p>
            <p>
              {`Monday:
              ${moment(employee.availability.monStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.monEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Tuesday:
              ${moment(employee.availability.tueStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.tueEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Wednesday:
              ${moment(employee.availability.wedStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.wedEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Thursday:
              ${moment(employee.availability.thuStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.thuEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Friday:
              ${moment(employee.availability.friStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.friEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Saturday:
              ${moment(employee.availability.satStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.satEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>

            <p>
              {`Sunday:
              ${moment(employee.availability.sunStart, "HH:mm").format(
                "hh:mm a"
              )} -
              ${moment(employee.availability.sunEnd, "HH:mm").format(
                "hh:mm a"
              )}`}
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              {moment(employee.createdAt.toDate().toString()).calendar()}
            </div>
            <Link to="/">
              <button className="waves-effect waves-light btn btn-form z-depth-0">
                Back
              </button>
            </Link>
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
