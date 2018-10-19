import React from "react";
import dateFns from "date-fns";

import Day from "./Day";
import Task from "./Task";

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

  componentWillMount() {
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
    this.setState({ thisMonth: rows });

    // return <div className="body">{rows}</div>;
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
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
    let tempArray = this.state.thisMonth.forEach(
      item => item.props.children.filter(currentDay => currentDay.key == day)
      // day.filter(item => item.key === day)
    );

    console.log(tempArray);
    // tempArray.filter(item => item.key === day);
    // tempArray.forEach(item => console.log(item.key, " day is " + day));
    //console.log(tempArray);
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
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
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
