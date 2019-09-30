import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/schedule">Schedules</NavLink>
      </li>
      <li>
        <NavLink to="/create">New Employee</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}> Log Out</a>
      </li>
      <li>
        <NavLink
          to="/"
          className="waves-effect waves-green btn btn-floating btn-form-dark"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
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
