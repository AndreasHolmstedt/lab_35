import React, { Component } from 'react';
import './App.css';
import List from './components/list.js'
import Counter from './components/counter.js'
import TextTransform from './components/textTransform.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <Counter />
        <TextTransform />
      </div>
    );
  }
}

export default App;
