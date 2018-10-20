import React, { Component } from "react";

import Tasks from "./Tasks";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingTaks: false,
      tasks: [],
      currentTask: ""
    };
  }

  render() {
    console.log(this.props);
    // if (!this.state.addingTaks) {
    return (
      <div
        className="individualDay col cell"
        onClick={() => this.props.onDateClick(this.props.date)}
      >
        <span className="number">{this.props.date}</span>
        <span className="bg">{this.props.date}</span>
        <Tasks
          tasks={this.state.tasks}
          onClick={() => this.props.createNewTask("andreica")}
        />
      </div>
    );
    // } else if (this.state.addingTaks) {
    // return (
    //   <div className="task">
    //     <p>Please select a time</p>
    //     <form>
    //       <input placeholder="Task" />
    //       <button type="submit" onClick={this.goToCalendar}>
    //         {" "}
    //         Add Task{" "}
    //       </button>
    //     </form>
    //   </div>
    // );
    // }
  }
}

export default Day;
