import React, { Component } from "react";
import { connect } from "react-redux";
import { createShift } from "../../store/actions/scheduleActions";
import { Redirect } from "react-router-dom";
import { Row, Col, Select } from "react-materialize";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

class CreateShift extends Component {
  state = {
    employee: {
      start: "",
      end: "",
      title: "",
      employee: ""
    },
    employeeList: []
  };

  handleChange = e => {
    let newEmployeeList = this.state.employeeList;

    this.props.employees &&
      this.props.employees.map(employee => {
        console.log("I ran.");
        console.log("Check", this.checkAvailability(employee.monStart));
        if (this.checkAvailability(employee.monStart)) {
          newEmployeeList.push(
            <option
              value={`${employee.firstName} ${employee.lastName}`}
              key={employee.id}
            >{`${employee.firstName} ${employee.lastName}`}</option>
          );
        }
      });
    this.setState({
      [e.target.id]: e.target.value,
      employeeList: newEmployeeList
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createShift(this.state.employee);
    this.props.history.push("/schedule");
  };

  checkAvailability = avaStart => {
    let shiftStart = moment(this.state.start).format("HH:mm");
    return avaStart < shiftStart;
  };

  render() {
    const { auth, employees } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    const dateTimeStyle = {
      marginTop: "30px"
    };

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Shift</h5>
          <Row>
            <Col s={12} m={6} className="input-field">
              <input
                style={dateTimeStyle}
                type="datetime-local"
                id="start"
                onChange={this.handleChange}
              />
              <label htmlFor="startShift">Start Shift</label>
            </Col>
            <Col s={12} m={6} className="input-field">
              <input
                style={dateTimeStyle}
                type="datetime-local"
                id="end"
                onChange={this.handleChange}
              />
              <label htmlFor="endShift">End Shift</label>
            </Col>
          </Row>
          <Row>
            <Select
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                Select Employee
              </option>
              {this.state.employeeList}
            </Select>
          </Row>
          <div className="input-field">
            <button className="waves-effect waves-light btn btn-form z-depth-0">
              Create
            </button>
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
  firestoreConnect([{ collection: "employees", orderBy: ["firstName", "asc"] }])
)(CreateShift);
