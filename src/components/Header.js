import React, { Component } from "react";
import dateFns from "date-fns";

import Week from "./Week";

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      currentMonth: new Date()
    };
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

  render() {
    return <div className="header">{this.renderHeader()}</div>;
  }
}

export default Header;
