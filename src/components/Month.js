import React, { Component } from "react";
import dateFns from "date-fns";

import Week from "./Week";
import Day from "./Day";

class Month extends Component {
  constructor(props) {
    super();
    this.state = {
      currentMonth: new Date(),
      currentDay: new Date(),
      currentWeek: []
    };
  }

  renderWeeks() {
    for (let i = 0; i < 5; i++) {}
  }

  renderMonth() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <Day
            key={day}
            day={day}
            onDateClick={this.onDateClick}
            formattedDate={formattedDate}
            createNewTask={this.createNewTask}
          />
        );
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  render() {
    return <div className="month">{this.renderMonth()}</div>;
  }
}

export default Month;
