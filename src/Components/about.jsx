import React, { Component } from 'react'
import userlogo from './images/user.png'
import  './css/Main.css'

class About extends Component {
    render() {
        return (
            <section id="about" className="container-about">

                    <img className="aboutlogo" src={userlogo}  alt="abtimg"/>
                    <h1 id="contactnav" className="aboutheader">ABOUT ME</h1> 

                    <p>To work with an IT association at a passage level position where I can use my specialized and diagnostic abilities in the field of innovation while adding
                    to the improvement of the association. Passionate about implementing and launching new projects. Ability to translate business requirements into
                    technical solutions. Have made projects for which different software development methodologies were implemented that are widely used in
                    development.
                    </p>
                
            </section>
        )
    }
}

export default About