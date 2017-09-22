/* eslint no-eval: 0 */

import React, { Component } from 'react';
import { Buttons } from './buttons'

export class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0',
      storedValue: '0',
      operator: null
    }
    this.changeInput = this.changeInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.setOperator = this.setOperator.bind(this)
    this.runExpression = this.runExpression.bind(this)
  }

  //Takes event.target.value as a prop from Button handleClick
  changeInput(e) {
    let newInput = e
    if(this.state.displayValue === '0') {
      this.setState({
        displayValue: newInput
      })
    }
    else {
      this.setState({
        displayValue: this.state.displayValue + newInput      
      })
    }
  }

  clearInput() {
    this.setState({
      displayValue: '0'
    })
  }

  setOperator(op) {
    console.log("op:", op);
    this.setState({
      displayValue: '',
      operator: op,
      storedValue: this.state.displayValue
    })
  }

  runExpression() {
    let total = eval(parseInt(this.state.storedValue,10) + this.state.operator + parseInt(this.state.displayValue, 10))
    this.setState({
      displayValue: total
    })
    console.log("this.state.storedValue:", this.state.storedValue); 
    console.log("this.state.operator:", this.state.operator)
    console.log("this.state.displayValue:", this.state.displayValue);
    console.log("total:", total);
  }


  //need to render all buttons in here
  render() {
    return (
      <div>
        <h3 className="display">{this.state.displayValue}</h3>
        <table className="table">
          <tbody>
            <tr>
              <Buttons type="9" value="9" onClick={this.changeInput}/>
              <Buttons type="8" value="8" onClick={this.changeInput}/>
              <Buttons type="7" value="7" onClick={this.changeInput}/>
              <Buttons type="C" onClick={this.clearInput}/>
            </tr> 
            <tr>
              <Buttons type="6" value="6" onClick={this.changeInput}/>
              <Buttons type="5" value="5" onClick={this.changeInput}/>
              <Buttons type="4" value="4" onClick={this.changeInput}/>
              <Buttons type="x" value="*" onClick={this.setOperator}/>
            </tr>
             <tr>
              <Buttons type="3" value="3" onClick={this.changeInput}/>
              <Buttons type="2" value="2" onClick={this.changeInput}/>
              <Buttons type="1" value="1" onClick={this.changeInput}/>
              <Buttons type="%" value="/" onClick={this.setOperator}/>
            </tr>
             <tr>
              <Buttons type="0" value="0" onClick={this.changeInput}/>
              <Buttons type="+" value="+" onClick={this.setOperator}/>
              <Buttons type="-" value="-" onClick={this.setOperator}/>
              <Buttons type="=" onClick={this.runExpression}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
