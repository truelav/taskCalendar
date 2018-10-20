import React, { Component } from "react";

import Tasks from "./Tasks";
import AddTaskForm from "./AddTaskForm";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingTaks: false,
      tasks: [],
      currentTask: "",
      selectedDate: ""
    };
  }

  onDateClick = day => {
    console.log("the day is " + day);
    this.setState({
      selectedDate: day,
      addingTask: true
    });
  };

  componentWillMount() {
    // this.setState({
    //   tasks: this.props.tasks
    // });
  }

  render() {
    console.log(this.props);
    if (!this.state.addingTaks) {
      return (
        <div
          className="individualDay col cell"
          onClick={() => {
            // this.onDateClick(this.props.date);
            this.props.onDateClick(this.props.date);
          }}
        >
          <span className="number">{this.props.date}</span>
          <span className="bg">{this.props.date}</span>
          <Tasks
            tasks={this.state.tasks}
            // onClick={() => this.props.createNewTask("andreica")}
          />
        </div>
      );
    } else if (this.state.addingTaks) {
      return (
        <AddTaskForm
          day={this.state.selectedDate}
          createNewTask={this.createNewTask}
        />
      );
    }
  }
}

export default Day;
