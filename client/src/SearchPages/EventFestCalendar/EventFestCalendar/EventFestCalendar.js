import "../Styles/EventFestCalendar.css";
import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugins from "@fullcalendar/daygrid";
import { http } from "../../../services";

class EventFestCalendar extends Component {
  constructor() {
    super();
    this.state = {
      dataArray: [],
      loading: true,
    };
  }

  componentDidMount() {
    Promise.resolve(http.request({ url: "/event/all" }))
      .then((dates) => {
        this.setState({ dataArray: dates });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(this.setState({ loading: false }));
  }

  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugins]}
        events={this.state.dataArray}
      />
    );
  }
}

export default EventFestCalendar;
