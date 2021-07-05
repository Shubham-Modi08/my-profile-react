import React, { Component } from 'react'

import htmlimg from './images/html-5.png'
import cssimg from './images/css.png'
import droid from './images/android.png'

class Project extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={droid} width="100" height="100" alt="android"/></div>
               
            </section>
        )
    }
}

export default Project