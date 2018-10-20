import React, { Component } from "react";

import dateFns from "date-fns";
import Day from "./Day";

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderWeek = () => {
    const week = [];
    this.props.week.forEach((element, i) => {
      week.push(<Day key={i} date={element} />);
    });
    return <div className="row">{week}</div>;
  };

  render() {
    return <div>{this.renderWeek()}</div>;
  }
}

export default Week;
