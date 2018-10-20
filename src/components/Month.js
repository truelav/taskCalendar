import React, { Component } from "react";
import dateFns from "date-fns";

import Week from "./Week";
import Day from "./Day";

class Month extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      currentDay: new Date(),
      currentWeek: [],
      selectedMonth: []
    };
  }

  //   renderWeeks() {
  //     for (let i = 0; i < 5; i++) {}
  //   }

  componentWillMount() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];
    let week = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        week.push(formattedDate);
        // const cloneDay = day;
        // days.push(
        //   <Day
        //     key={day}
        //     day={day}
        //     onDateClick={this.onDateClick}
        //     formattedDate={formattedDate}
        //     createNewTask={this.createNewTask}
        //   />
        // );
        day = dateFns.addDays(day, 1);
      }

      rows.push(week);
      //   rows.push(
      //     <div className="row" key={day}>
      //       {days}
      //     </div>
      //   );
      week = [];
    }
    this.setState({ selectedMonth: rows });
  }

  //   renderMonth() {
  //     return <div className="body">{rows}</div>;
  //   }

  render() {
    return (
      <div className="body">
        <Week
          week={this.state.selectedMonth[0]}
          onDateClick={this.props.onDateClick}
          tasks={this.props.tasks.w1}
        />
        <Week
          week={this.state.selectedMonth[1]}
          onDateClick={this.props.onDateClick}
          tasks={this.props.tasks.w1}
        />
        <Week
          week={this.state.selectedMonth[2]}
          onDateClick={this.props.onDateClick}
          tasks={this.props.tasks.w1}
        />
        <Week
          week={this.state.selectedMonth[3]}
          onDateClick={this.props.onDateClick}
          tasks={this.props.tasks.w1}
        />
        <Week
          week={this.state.selectedMonth[4]}
          onDateClick={this.props.onDateClick}
          tasks={this.props.tasks.w1}
        />
      </div>
    );
  }
}

export default Month;
