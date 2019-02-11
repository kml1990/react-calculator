import React from "react";

const Display = props => {
    return (
      <div className="display">
        <div className="display__current">
          {props.calculation}
        </div>
        <div className="display__result">{props.sum}</div>
      </div>
    );
}

export default Display;
