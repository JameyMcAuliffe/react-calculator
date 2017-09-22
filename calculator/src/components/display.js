import React, { Component } from 'react';
import { Buttons } from './buttons'

export class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayValue: '0'
    }
    this.changeInput = this.changeInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

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
              <Buttons type="x"/>
            </tr>
             <tr>
              <Buttons type="3" value="3" onClick={this.changeInput}/>
              <Buttons type="2" value="2" onClick={this.changeInput}/>
              <Buttons type="1" value="1" onClick={this.changeInput}/>
              <Buttons type="%"/>
            </tr>
             <tr>
              <Buttons type="0" value="0" onClick={this.changeInput}/>
              <Buttons type="+"/>
              <Buttons type="-"/>
              <Buttons type="="/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
