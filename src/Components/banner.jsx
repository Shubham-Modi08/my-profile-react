  
import React, { Component } from 'react'
import logo from './images/coding.png';




class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="100" height="100" alt="profilepic"/></a>
                    <h1> Hi! I'm Shubham Modi </h1>
                    <br/>
                    
            </section>
        )
    }
}

export default Banner