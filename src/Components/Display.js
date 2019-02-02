import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <div className="display__current">
          {this.props.calculation.join(" ")}
        </div>
        <div className="display__result">{this.props.sum}</div>
      </div>
    );
  }
}

export default Display;
