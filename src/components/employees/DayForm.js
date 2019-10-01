import React from "react";
import { Row, Col } from "react-materialize";

function DayForm(props) {
  const newStyle = {
    margin: "0px 0px",
    padding: "4px 8px"
  };
  
  return (
    <Row style={newStyle}>
      <Col s={12} m={2}>
        <div className="valign-wrapper">
          <p>{props.day}</p>
        </div>
      </Col>
      <Col style={newStyle} s={12} m={5} className="input-field">
        <input
          type="time"
          id={`${props.abrv}Start`}
          onChange={props.onChange}
        />
        <label htmlFor={`${props.abrv}Start`}>Start</label>
      </Col>
      <Col style={newStyle} s={12} m={5} className="input-field">
        <input type="time" id={`${props.abrv}End`} onChange={props.onChange} />
        <label htmlFor={`${props.abrv}End`}>End</label>
      </Col>
    </Row>
  );
}

export default DayForm;
