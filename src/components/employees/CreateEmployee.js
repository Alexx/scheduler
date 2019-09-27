import React, { Component } from "react";
import { connect } from "react-redux";
import { createEmployee } from "../../store/actions/employeeActions";
import { Redirect } from "react-router-dom";
import { TimePicker } from "react-materialize";

class CreateEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    monStart: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createEmployee(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Employee</h5>
          <div className="row">
            <div className="col s12">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  id="firstName"
                  onChange={this.handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s6">
                <input type="text" id="lastName" onChange={this.handleChange} />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>
          {/* 
          <div className="row">
            <div className="col s12">
              <div className="input-field col s6">
                <TimePicker id="monStart" />
                <label htmlFor="monStart">Start</label>
              </div>
              <div className="input-field col s6">
                <TimePicker id="monEnd" />
                <label htmlFor="monEnd">End</label>
              </div>
            </div>
          </div> */}

          <div className="input-field">
            <button className="btn btn-form z-depth-0">Create</button>
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
