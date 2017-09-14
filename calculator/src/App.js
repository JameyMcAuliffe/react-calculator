import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Numbers/>
  }
}

class Numbers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numValue: 0
    }
  }

  render() {
    return (
      <div>
        <button>9</button>
        <button>8</button>
        <button>7</button>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>0</button>
      </div>
    )
  }
}

export default App;
