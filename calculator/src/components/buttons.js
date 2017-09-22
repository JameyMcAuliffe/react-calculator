import React, { Component } from 'react';

export class Buttons extends Component {

	constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
  	let target = e.target.value
    this.props.onClick(target)
  }

  //need to render only a singular button
  render() {
    return (
      <td>
      	<button className="button" value={this.props.value} onClick={this.handleClick}>{this.props.type}</button>
      </td>
    )
  }
}
