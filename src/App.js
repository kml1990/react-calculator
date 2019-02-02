import React, { Component } from 'react';

import Display from './Components/Display';
import Controls from './Components/Controls';

import math from 'mathjs';

import './App.scss';

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
  
  sum = (calculation, type) => {
    let result = calculation.join('');
    if (result) {
      if(type == "equal"){
        result = math.eval(result);
      } else if(type == "perc"){
        result = result * 0.01;
      }
    } else {
      result = 0;
    }
    
    this.setState({
       sum: result
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
