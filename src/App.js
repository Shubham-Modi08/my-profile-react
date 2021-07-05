
import React, { Component } from 'react';
import './App.css';
import Header from './Components/header'
import Banner from './Components/banner'
import Navbar from './Components/navbar'
import About from './Components/about'
import Skills from './Components/skills'
import Contact from './Components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      <hr />
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My Skills</h1>
      <hr />
      <Skills />
      <hr />
      <Contact />
      </div>
    );
  }
}


export default App;
