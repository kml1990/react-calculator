import React, { Component } from 'react';

import Button from '../Components/Button'

class Controls extends Component {
  constructor() {
    super();
    this.state = { 
      calculation: []
    }
  }
  
  handleClick = e => {
    
    console.log(e.target.value)
    const value = e.target.value;
    switch(value)
    {
      case 'clear' :
        
        this.setState({ calculation: [] }, () => {
          this.props.triggerCalculation(this.state.calculation);
          this.props.triggerSum(this.state.calculation);
        });
        
        break;
      case '=' :

        if(isNaN(this.state.calculation[this.state.calculation.length - 1])) {
          break;
        }

        this.props.triggerSum(this.state.calculation.join(''));
        this.setState({ 
          calculation: [] 
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case 'posNeg' :

        let posNeg = [[...this.state.calculation].join('') * -1];
        this.setState({ 
          calculation: posNeg
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case 'perc' :

        let percentage = [[...this.state.calculation].join('') * 0.01];
        
        this.setState({ 
          calculation: percentage
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });

        break;
      case 'back' :

        let removeLast = [...this.state.calculation];
        removeLast.splice(removeLast.length - 1, 1);

        this.setState({
          calculation: removeLast
        }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });
        break;

      default :
      
        if(isNaN(value) && isNaN(this.state.calculation[this.state.calculation.length - 1])) {
          break;
        }

        this.setState({ calculation: [...this.state.calculation, value] }, () => {
          this.props.triggerCalculation(this.state.calculation.join(''));
        });
        
        break;
    }
    
  };

  render() {
    return (
      <div className="controls">
        <Button
          onClick={this.handleClick}
          name="C"
          value="clear"
          color="controls__item--darker"
        />
        <Button
          onClick={this.handleClick}
          name="+/-"
          value="posNeg"
          color="controls__item--darker"
        />
        <Button
          onClick={this.handleClick}
          name="%"
          value="perc"
          color="controls__item--darker"
        />
        <Button
          onClick={this.handleClick}
          name="/"
          value="/"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.handleClick} name="7" value="7" />
        <Button onClick={this.handleClick} name="8" value="8" />
        <Button onClick={this.handleClick} name="9" value="9" />
        <Button
          onClick={this.handleClick}
          name="x"
          value="*"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.handleClick} name="4" value="4" />
        <Button onClick={this.handleClick} name="5" value="5" />
        <Button onClick={this.handleClick} name="6" value="6" />
        <Button
          onClick={this.handleClick}
          name="-"
          value="-"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.handleClick} name="3" value="3" />
        <Button onClick={this.handleClick} name="2" value="2" />
        <Button onClick={this.handleClick} name="1" value="1" />
        <Button
          onClick={this.handleClick}
          name="+"
          value="+"
          color="controls__item--orangeLight"
        />

        <Button onClick={this.handleClick} name="0" value="0" />
        <Button onClick={this.handleClick} name="." value="." />
        <Button onClick={this.handleClick} name="&#8592;" value="back" />
        <Button
          onClick={this.handleClick}
          name="="
          value="="
          color="controls__item--orangeMedium"
        />
      </div>
    );
  }
}

export default Controls;
