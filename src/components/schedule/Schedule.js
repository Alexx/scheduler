import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Card } from "react-materialize";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Schedule extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment()),
        title: "Garland"
      }
    ]
  };

  render() {
    return (
      <Container>
        <Card style={{ height: "83vh", marginTop: "30px" }}>
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView={"month"}
            events={this.state.events}
            style={{ height: "75vh" }}
          />
        </Card>
      </Container>
    );
  }
}

export default Schedule;
