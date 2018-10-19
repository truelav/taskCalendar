import React, { Component } from "react";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => {
          return (
            <li className="task" key={index}>
              {task}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Tasks;
