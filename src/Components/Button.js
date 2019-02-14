import React from "react";

const Button = props => {
    const styles = "controls__item " + props.color;
    return (
      <button
        onClick={props.onClick}
        className={styles}
        value={props.value}>
        {props.name}
      </button>
    );
}

export default Button;
