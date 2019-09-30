import React, { Component } from "react";
import { connect } from "react-redux";
import { createEmployee } from "../../store/actions/employeeActions";
import { Redirect } from "react-router-dom";
import { TimePicker, Row, Col } from "react-materialize";
import moment from "moment";

let _monday = "";

class CreateEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    monStart: "",
    monEnd: "",
    tueStart: "",
    tueEnd: ""
  };
  handleChange = e => {
    console.log(this.state);
    console.log("monday", _monday);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleTimeChange = () => {
    console.log("time was changed");
  };

  componentDidMount = () => {
    const mStart = document.getElementById("monStart");
    mStart.addEventListener("change", function() {
      _monday = mStart.value;
      console.log("Monday Start", _monday);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Monday before submit", _monday);
    this.setState({
      monStart: _monday
    });
    console.log(this.state);
    this.props.createEmployee(this.state);
    this.props.history.push("/");
  };

  timePickStyle = {};

  rowStyle = {
    height: "50px",
    margin: "16px 0",
    padding: "0px"
  };

  render() {
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

          <Row>
            <Col style={this.rowStyle} s={12} m={2}>
              <div style={this.rowStyle} className="valign-wrapper">
                <p>Monday</p>
              </div>
            </Col>
            <Col style={this.rowStyle} s={12} m={5} className="input-field">
              <TimePicker
                style={this.rowStyle}
                id="monStart"
                onChange={this.handleChange}
              />
              <label style={this.rowStyle} htmlFor="monStart">
                Start
              </label>
            </Col>
            <Col style={this.rowStyle} s={12} m={5} className="input-field">
              <TimePicker
                style={this.rowStyle}
                id="monEnd"
                onChange={this.handleChange}
              />
              <label style={this.rowStyle} htmlFor="monEnd">
                End
              </label>
            </Col>
          </Row>

          <Row>
            <Col style={this.rowStyle} s={12} m={2}>
              <div style={this.rowStyle} className="valign-wrapper">
                <p>Tuesday</p>
              </div>
            </Col>
            <Col style={this.rowStyle} s={12} m={5} className="input-field">
              <TimePicker
                style={this.rowStyle}
                id="tueStart"
                onChange={this.handleChange}
              />
              <label style={this.rowStyle} htmlFor="tueStart">
                Start
              </label>
            </Col>
            <Col style={this.rowStyle} s={12} m={5} className="input-field">
              <TimePicker
                style={this.rowStyle}
                id="tueEnd"
                onChange={this.handleChange}
              />
              <label style={this.rowStyle} htmlFor="mtueEnd">
                End
              </label>
            </Col>
          </Row>

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
