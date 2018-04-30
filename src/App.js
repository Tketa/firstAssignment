import React, { Component } from 'react';
import MovieContainer from './component/MovieContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }  

  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
