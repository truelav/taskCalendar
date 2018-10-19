import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAddTask() {}

  goToCalendar() {}

  render() {
    return (
      <div className="task">
        <p>Please select a time</p>
        <form>
          <input placeholder="Task" />
          <button type="submit" onClick={this.goToCalendar}>
            {" "}
            Add Task{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Task;
