import React, { Component } from 'react'
import  './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>HOME</a>
                <a href="#about"><i className="fa fa-fw fa-user"></i>ABOUT</a>
                <a href="#skills"><i className="fa fa-fw fa-xing"></i>SKILLS</a>
                <a href="#contactlogo"><i className="fa fa-fw fa-envelope"></i>CONTACT</a>
            </nav>
        )
    }
}

export default Navbar