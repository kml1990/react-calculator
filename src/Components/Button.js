import React, { Component } from 'react';

class Button extends Component {
  render() {
    const styles = "controls__item " + this.props.color;
    return (
      <a
        onClick={this.props.onClick}
        className={styles}
        data-value={this.props.value}
      >
        {this.props.name}
      </a>
    );
  }
}

export default Button;
