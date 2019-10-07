import React, { Component } from "react";
import { connect } from "react-redux";
import { createEmployee } from "../../store/actions/employeeActions";
import { Redirect } from "react-router-dom";
import { Row, Col } from "react-materialize";
import DayForm from "./DayForm";

class CreateEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    availability: {
      monStart: "",
      monEnd: "",
      tueStart: "",
      tueEnd: "",
      wedStart: "",
      wedEnd: "",
      thuStart: "",
      thuEnd: "",
      friStart: "",
      friEnd: "",
      satStart: "",
      satEnd: "",
      sunStart: "",
      sunEnd: ""
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAvailabilityChange = e => {
    const newAvailability = { ...this.state.availability };
    newAvailability[e.target.id] = e.target.value;
    this.setState({
      availability: newAvailability
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createEmployee(this.state);
    this.props.history.push("/");
  };

  render() {
    const deleteStyle = {
      margin: "0px 0px",
      padding: "0px 0px"
    };
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Employee</h5>
          <Row>
            <Col s={12} m={6} className="input-field">
              <input type="text" id="firstName" onChange={this.handleChange} />
              <label htmlFor="firstName">First Name</label>
            </Col>
            <Col s={12} m={6} className="input-field">
              <input type="text" id="lastName" onChange={this.handleChange} />
              <label htmlFor="lastName">Last Name</label>
            </Col>
          </Row>
          <DayForm
            day="Monday"
            abrv="mon"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Tuesday"
            abrv="tue"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Wednesday"
            abrv="wed"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Thursday"
            abrv="thu"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Friday"
            abrv="fri"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Saturday"
            abrv="sat"
            onChange={this.handleAvailabilityChange}
          />
          <DayForm
            day="Sunday"
            abrv="sun"
            onChange={this.handleAvailabilityChange}
          />
          <div style={{ deleteStyle }}>
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
