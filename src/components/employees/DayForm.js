import React from "react";
import { Row, Col } from "react-materialize";

function DayForm(props) {
  const rowStyle = {
    margin: "0px",
    padding: "0px"
  };
  return (
    <Row>
      <Col style={rowStyle} s={12} m={2}>
        <div style={rowStyle} className="valign-wrapper">
          <p>{props.day}</p>
        </div>
      </Col>
      <Col style={rowStyle} s={12} m={5} className="input-field">
        <input
          type="time"
          id={`${props.abrv}Start`}
          onChange={props.onChange}
        />
        <label style={rowStyle} htmlFor={`${props.abrv}Start`}>
          Start
        </label>
      </Col>
      <Col style={rowStyle} s={12} m={5} className="input-field">
        <input type="time" id={`${props.abrv}End`} onChange={props.onChange} />
        <label style={rowStyle} htmlFor={`${props.abrv}End`}>
          End
        </label>
      </Col>
    </Row>
  );
}

export default DayForm;
