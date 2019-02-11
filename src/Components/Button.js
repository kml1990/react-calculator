import React from "react";

const Button = props => {
    const styles = "controls__item " + props.color;
    return (
      <a
        onClick={props.onClick}
        className={styles}
        data-value={props.value}>
        {props.name}
      </a>
    );
}

export default Button;
