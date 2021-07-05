
import React, { Component } from 'react';
import './App.css';
import Header from './Components/header'
import Banner from './Components/banner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <Banner />
        <br />
      </div>
    );
  }
}


export default App;
