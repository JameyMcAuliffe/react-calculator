import React, { Component } from 'react';

export class Buttons extends Component {

  constructor(props) {
    super(props)
    this.handleNumClick = this.handleNumClick.bind(this)
  }

  handleNumClick(e) {
    let num = e.target.value
    this.props.onClick(num)
  }

  render() {
    return (
      <table className="table">
      	<tbody>
	        <tr>
	          <td>
	            <button className="button" value="9" onClick={this.handleNumClick}>9</button>
	          </td>
	          <td>
	            <button className="button" value="8" onClick={this.handleNumClick}>8</button>
	          </td>
	          <td>
	            <button className="button" value="7" onClick={this.handleNumClick}>7</button>
	          </td>
	          <td>
	            <button className="button" value="0" onClick={this.handleNumClick}>C</button>
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <button className="button" value="6" onClick={this.handleNumClick}>6</button>
	          </td>
	          <td>
	            <button className="button" value="5" onClick={this.handleNumClick}>5</button>
	          </td>
	          <td>
	            <button className="button" value="4" onClick={this.handleNumClick}>4</button>
	          </td>
	          <td>
	            <button className="button">*</button>
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <button className="button" value="3" onClick={this.handleNumClick}>3</button>
	          </td>
	          <td>
	            <button className="button" value="2" onClick={this.handleNumClick}>2</button>
	          </td>
	          <td>
	            <button className="button" value="1" onClick={this.handleNumClick}>1</button>
	          </td>
	          <td>
	            <button className="button">%</button>
	          </td>
	        </tr>
	        <tr>
	          <td>
	            <button className="button" value="0" onClick={this.handleNumClick}>0</button>
	          </td>
	          <td>
	            <button className="button">+</button>
	          </td>
	          <td>
	            <button className="button">-</button>
	          </td>
	          <td>
	            <button className="button">=</button>
	          </td>
	        </tr>
	      </tbody>
      </table>
    )
  }
}
