import React, { Component } from "react";

import Day from "./Day";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Days extends Component {
  constructor(props) {
    super();
    this.state = {
      currentMonth: 0,
      currentDate: 0,
      currentDay: 0,
      currentYear: 0,
      day: "",
      month: ""
    };
  }

  componentDidMount = () => {
    let date = new Date();
    this.setState({
      currentDay: date.getDay(),
      currentDate: date.getDate(),
      currentYear: date.getFullYear(),
      day: weekDays[date.getDay()],
      month: yearMonths[date.getMonth()]
    });
  };

  render() {
    return (
      <div className="calendarComponent">
        <p>
          {this.state.month} {this.state.currentYear}
        </p>
        <table>
          {weekDays.map((day, index) => {
            return <th key={index}>{day}</th>;
          })}

          <tbody>
            <tr>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
              <td>
                <Day />
              </td>
            </tr>
            <tr>
              <td>
                <Day />
              </td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>Jill</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Days;
