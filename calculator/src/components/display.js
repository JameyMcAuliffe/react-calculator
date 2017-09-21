import React, { Component } from 'react';
import { Buttons } from './buttons'

export class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      output: 0
    }
    this.changeOutput = this.changeOutput.bind(this)
  }

  changeOutput(newOutput) {
    this.setState({
      output: newOutput
    })
  }

  render() {
    return (
      <div>
        <h3 className="display">{this.state.output}</h3>
        <Buttons onClick={this.changeOutput}/>
      </div>
    )
  }
}
