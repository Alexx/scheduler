import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = props => {
  const { employee, auth } = props;
  console.log("employee", employee);

  if (!auth.uid) return <Redirect to="/login" />;

  if (employee) {
    return (
      <div className="container section employee-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <h1 className="card-title">
              {employee.firstName} {employee.lastName}
            </h1>
            <p className="ava-text">Availability</p>
            <p>
              {`Monday:
              ${moment(employee.monStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.monEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Tuesday:
              ${moment(employee.tueStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.tueEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Wednesday:
              ${moment(employee.wedStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.wedEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Thursday:
              ${moment(employee.thuStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.thuEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Friday:
              ${moment(employee.friStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.friEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Saturday:
              ${moment(employee.satStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.satEnd, "HH:mm").format("hh:mm a")}`}
            </p>

            <p>
              {`Sunday:
              ${moment(employee.sunStart, "HH:mm").format("hh:mm a")} -
              ${moment(employee.sunEnd, "HH:mm").format("hh:mm a")}`}
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
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
