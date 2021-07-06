import React, { Component } from 'react'

import htmlimg from './images/html-5.png'
import cssimg from './images/css.png'
import droid from './images/android.png'
import js from './images/js.png'
import kotlin from './images/Kotlin.png'

class Project extends Component {
    render() {
        return (
       
            <section  className="flex-project-container">
                
                    <div className="skills-section"><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div className="skills-section"><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div className="skills-section"><img src={js} width="100" height="100" alt="android"/></div>
                    <div className="skills-section"><img src={droid} width="100" height="100" alt="android"/></div>
                    <div className="skills-section"><img src={kotlin} width="100" height="100" alt="android"/></div>
               
            </section>
        )
    }
}

export default Project