import React, { Component } from "react";
import EmployeeList from "../employees/EmployeeList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { employees, auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <EmployeeList employees={employees} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.firestore.ordered.employees,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "employees",
        orderBy: ["firstName", "asc"],
        where: ["managerId", "==", props.auth.uid]
      }
    ];
  })
)(Dashboard);
