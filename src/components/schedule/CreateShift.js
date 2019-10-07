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
      start: null,
      end: null,
      title: null,
      employee: null
    },
    employeeList: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value }, () =>
      this.updateEmployees()
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createShift(this.state.employee);
    this.props.history.push("/schedule");
  };

  updateEmployees = () => {
    let newEmployeeList = [];

    this.props.employees &&
      this.props.employees.map(employee => {
        console.log(employee.firstName);
        if (this.checkAvailability(employee.availability)) {
          newEmployeeList.push(
            <option
              value={`${employee.firstName} ${employee.lastName}`}
              key={employee.id}
            >
              {`${employee.firstName} ${employee.lastName}`}
            </option>
          );
        }
      });

    this.setState({
      employeeList: newEmployeeList
    });
  };

  checkAvailability = availability => {
    let shiftStart = moment(this.state.start).format("HHmm");
    let shiftEnd = moment(this.state.end).format("HHmm");

    switch (moment(this.state.start).isoWeekday()) {
      case 1:
        console.log(
          `Case 1: ${moment(availability.monStart, "HH:mm").format(
            "HHmm"
          )} <= ${shiftStart} && ${moment(availability.monEnd, "HH:mm").format(
            "HHmm"
          )} >= ${shiftEnd}`
        );
        console.log(
          moment(availability.monStart, "HH:mm").format("HHmm") <= shiftStart &&
            moment(availability.monEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
        return (
          moment(availability.monStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.monEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 2:
        return (
          moment(availability.tueStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.tueEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 3:
        return (
          moment(availability.wedStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.wedEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 4:
        return (
          moment(availability.thuStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.thuEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 5:
        return (
          moment(availability.friStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.friEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 6:
        return (
          moment(availability.satStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.satEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      case 7:
        return (
          moment(availability.sunStart, "HH:mm").format("HHmm") <= shiftStart &&
          moment(availability.sunEnd, "HH:mm").format("HHmm") >= shiftEnd
        );
      default:
        return false;
    }
  };

  render() {
    const { auth } = this.props;

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
