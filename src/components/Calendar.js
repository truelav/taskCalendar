import React from "react";
import dateFns from "date-fns";

import Month from "./Month";
import Week from "./Week";
import Day from "./Day";
import Task from "./Task";
import WeekDays from "./WeekDays";
import Header from "./Header";
import AddTaskForm from "./AddTaskForm";

class Calendar extends React.Component {
  state = {
    thisMonth: [],
    addingTask: false,
    formattedDate: "",
    currentMonth: new Date(),
    selectedDate: new Date(),
    newTask: "",
    tasks: {
      w1: [
        { d1: ["marian"] },
        { d2: [] },
        { d3: [] },
        { d4: ["laundry"] },
        { d5: [] },
        { d6: [] },
        { d7: [] }
      ],
      w2: [
        { d1: [] },
        { d2: [] },
        { d3: [] },
        { d4: [] },
        { d5: [] },
        { d6: [] },
        { d7: [] }
      ],
      w3: [
        { d1: [] },
        { d2: [] },
        { d3: [] },
        { d4: [] },
        { d5: [] },
        { d6: [] },
        { d7: [] }
      ],
      w4: [
        { d1: [] },
        { d2: [] },
        { d3: [] },
        { d4: [] },
        { d5: [] },
        { d6: [] },
        { d7: [] }
      ],
      w5: [
        { d1: [] },
        { d2: [] },
        { d3: [] },
        { d4: [] },
        { d5: [] },
        { d6: [] },
        { d7: [] }
      ]
    }
  };

  handleAddingTaskAndDate = () => {};

  createNewTask = (task, date) => {
    console.log(task, date);
    this.setState({
      newTask: task,
      addingTask: false
    });
  };

  onDateClick = day => {
    console.log("the day is " + day);
    this.setState({
      selectedDate: day,
      addingTask: true
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
  };

  render() {
    if (this.state.addingTask === false) {
      return (
        <div className="calendar">
          <Header />
          <WeekDays />
          <Month
            onDateClick={this.onDateClick}
            newTask={this.state.newTask}
            tasks={this.state.tasks}
          />
        </div>
      );
    } else if (this.state.addingTask === true) {
      return (
        <AddTaskForm
          day={this.state.selectedDate}
          createNewTask={this.createNewTask}
        />
      );
    }
  }
}

export default Calendar;
