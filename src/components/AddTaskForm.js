import React, { Component } from "react";
import dateFns from "date-fns";

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      task: e.target.value
    });
  };

  render() {
    return (
      <div className="task">
        <p>Please select a time</p>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button
          onClick={() =>
            this.props.createNewTask(this.state.task, this.props.day)
          }
          value="Submit"
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddTaskForm;
