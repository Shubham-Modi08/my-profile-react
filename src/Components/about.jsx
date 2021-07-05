import React, { Component } from 'react'
import userlogo from './images/user.png'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>About Me</h1> 

                    <img src={userlogo} width="180" height="180" alt="abtimg"/>
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