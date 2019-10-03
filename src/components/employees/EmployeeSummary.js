import React from "react";
import moment from "moment";
import { deleteEmployee } from "../../store/actions/employeeActions";
import { CollectionItem, Modal, Button } from "react-materialize";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { tsConstructorType } from "@babel/types";

const EmployeeSummary = props => {
  return (
    <CollectionItem className="avatar valign-wrapper">
      <Link to={/employee/ + props.employee.id} key={props.employee.id}>
        <i className="material-icons circle">account_circle</i>
        <div className="employee-list-item">
          <span>
            {props.employee.firstName} {props.employee.lastName}
          </span>
          <p>
            {moment(props.employee.createdAt.toDate().toString()).calendar()}
          </p>
        </div>
      </Link>

      <Modal
        header="Delete"
        trigger={
          <div className="valign-wrapper">
            <Button className="waves-effect waves-light btn btn-form z-depth-0 employee-btn">
              Delete
            </Button>
          </div>
        }
      >
        <p>
          Are you sure you want to <strong>DELETE</strong>{" "}
          {props.employee.firstName} {props.employee.lastName}?
        </p>
        <div className="valign-wrapper">
          <button
            className="waves-effect waves-light btn btn-form z-depth-0 employee-btn"
            onClick={() => props.deleteEmployee(props.employee.id)}
          >
            Delete
          </button>
        </div>
      </Modal>
    </CollectionItem>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteEmployee: employeeId => dispatch(deleteEmployee(employeeId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EmployeeSummary);
