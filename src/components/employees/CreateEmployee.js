import React, { Component } from "react";
import { connect } from "react-redux";
import { createEmployee } from "../../store/actions/employeeActions";
import { Redirect } from "react-router-dom";

class CreateEmployee extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createEmployee(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Employee</h5>
          <div className="input-field">
            <input type="text" id="firstName" onChange={this.handleChange} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <textarea
              id="lastName"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createEmployee: employee => dispatch(createEmployee(employee))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEmployee);
