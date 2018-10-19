import React, { Component } from "react";
import dateFns from "date-fns";

import Week from "./Week";

class WeekDays extends Component {
  constructor(props) {
    super();
    this.state = {
      currentMonth: new Date()
    };
  }

  renderWeekDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  render() {
    return <div className="month">{this.renderWeekDays()}</div>;
  }
}

export default WeekDays;
