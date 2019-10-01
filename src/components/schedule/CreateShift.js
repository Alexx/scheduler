import React, { Component } from "react";
import { connect } from "react-redux";
import { createShift } from "../../store/actions/scheduleActions";
import { Redirect } from "react-router-dom";
import { Row, Col, Select } from "react-materialize";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class CreateShift extends Component {
  state = {
    date: "",
    startShift: "",
    endShift: "",
    employee: ""
  };

  handleChange = e => {
    console.log(this.state);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createShift(this.state);
    this.props.history.push("/schedule");
  };

  render() {
    const { auth, employees } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    console.log("Employees", employees);

    let eList = [];
    employees &&
      employees.map(employee => {
        eList.push(
          <option
            value={employee}
            key={employee.id}
          >{`${employee.firstName} ${employee.lastName}`}</option>
        );
      });

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Shift</h5>
          <Row>
            <Col s={12} m={4} className="input-field">
              <input type="date" id="date" onChange={this.handleChange} />
              <label htmlFor="date">Start Shift</label>
            </Col>
            <Col s={12} m={4} className="input-field">
              <input type="time" id="startShift" onChange={this.handleChange} />
              <label htmlFor="startShift">Start Shift</label>
            </Col>
            <Col s={12} m={4} className="input-field">
              <input type="time" id="endShift" onChange={this.handleChange} />
              <label htmlFor="endShift">End Shift</label>
            </Col>
          </Row>
          <Row>
            <Select id="employee" value="" onChange={this.handleChange}>
              <option value="" disabled>
                Select Employee
              </option>
              {eList}
            </Select>
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
    employees: state.firestore.ordered.employees,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createShift: shift => dispatch(createShift(shift))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "employees", orderBy: ["firstName", "asc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(CreateShift);
