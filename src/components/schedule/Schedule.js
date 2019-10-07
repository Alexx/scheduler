import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Card } from "react-materialize";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Schedule extends Component {
  render() {
    const { shifts, auth } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    let events = [];
    shifts &&
      shifts.map(shift => {
        shift.start = new Date(shift.start);
        shift.end = new Date(shift.end);
        events.push(shift);
      });

    return (
      <Container>
        <Card style={{ height: "100vh", marginTop: "20px" }}>
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView={"month"}
            events={events}
            style={{ height: "75vh" }}
          />
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    shifts: state.firestore.ordered.shifts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "shifts", orderBy: ["start", "asc"] }])
)(Schedule);
