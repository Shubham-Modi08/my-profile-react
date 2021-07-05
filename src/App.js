
import React, { Component } from 'react';
import './App.css';
import contact from '../src/Components/images/contact.png';
// import Header from './Components/header'
import Banner from './Components/banner'
import Navbar from './Components/navbar'
import About from './Components/about'
import Skills from './Components/skills'
import Contact from './Components/contact'


class App extends Component {
  render() {
    return (
      <div className="App-header">
        {/* <Header /> */}
      {/* <hr /> */}
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <h1 id="skills" className="skillheader">MY SKILLS</h1>
      <hr />
      <Skills />
      <br/>
      <hr />
      <img  className="contactlogo" src={contact} alt ="contactlogo"/>
      <h1 id="contactnav" className="skillheader" >CONTACT INFORMATION</h1>
      <hr/>
      <br/>
      <Contact />
      </div>
    );
  }
}


export default App;
