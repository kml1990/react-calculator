import React, { Component } from 'react';

import Display from '../Components/Display';
import Controls from './Controls';

import math from 'mathjs';

import '../App.scss';

class App extends Component {

  constructor() {
    super();
    
    this.state = {
      calculation: [],
      sum: 0
    };
  }
  
  calculate = (calculation) => {
    this.setState({
      calculation,
    })
  }
  
  sum = (calculation) => {

    if(String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = math.eval(calculation);
    }

    this.setState({
       sum: calculation
    })
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Display calculation={this.state.calculation} sum={this.state.sum} />
          <Controls triggerSum={this.sum} triggerCalculation={this.calculate}/>
        </div>
      </div>
    );
  }
}

export default App;
