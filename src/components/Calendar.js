import React from "react";
import dateFns from "date-fns";

import Month from "./Month";
import Week from "./Week";
import Day from "./Day";
import Task from "./Task";
import WeekDays from "./WeekDays";
import Header from "./Header";

class Calendar extends React.Component {
  state = {
    thisMonth: [],
    thisDay: "",
    addingTask: false,
    formattedDate: "",
    currentMonth: new Date(),
    selectedDate: new Date(),
    task: ""
  };

  componentWillMount() {}

  renderCells() {
    // this.state.thisMonth.map((day, index) => {
    return <div className="body">{this.state.thisMonth}</div>;
    // });
  }

  handleAddTask = () => {
    console.log(this.state.currentMonth);
    this.setState({ addingTask: true });
  };

  createNewTask = day => {
    console.log(day);
  };

  onDateClick = day => {
    console.log("the day is " + day);
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
    console.log(this.state);
  };

  render() {
    if (this.state.addingTask === false) {
      return (
        <div className="calendar">
          <Header />
          <WeekDays />
          <Month />
        </div>
      );
    } else if (this.state.addingTask === true) {
      return <Day />;
    } else if (this.state.selectedDate !== new Date()) {
      return <div>{console.log(this.state.selectedDate)}</div>;
    }
  }
}

export default Calendar;
