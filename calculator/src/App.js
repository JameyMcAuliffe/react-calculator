import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <Display/>
      <Numbers/>
    </div>)
  }
}

class Display extends Component {
  render() {
    return <h3 className="display">0</h3>
  }
}

class Numbers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numValue: null
    }
  }

  render() {
    return (
      <table className="table">
        <tr>
          <td>
            <button className="button">9</button>
          </td>
          <td>
            <button className="button">8</button>
          </td>
          <td>
            <button className="button">7</button>
          </td>
          <td>
            <button className="button">C</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button">6</button>
          </td>
          <td>
            <button className="button">5</button>
          </td>
          <td>
            <button className="button">4</button>
          </td>
          <td>
            <button className="button">*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button">3</button>
          </td>
          <td>
            <button className="button">2</button>
          </td>
          <td>
            <button className="button">1</button>
          </td>
          <td>
            <button className="button">%</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="button">0</button>
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
      </table>
    )
  }
}

export default App;
