import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/schedule">Schedules</NavLink>
        </li>
        <li>
          <NavLink to="/create_employee">New Employee</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}> Log Out</a>
        </li>
        <li>
          <NavLink
            to="/"
            className="waves-effect waves-light btn btn-form z-depth-0 btn-floating btn-form-dark"
          >
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
