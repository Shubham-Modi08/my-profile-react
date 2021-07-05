import React, { Component } from 'react'
import mailme from './images/mailme.png';


class Contact extends Component {
    render() {
        return (
            <section id = "contact"className="container-banner">

                <br />
                <h3> <strong>Hello World</strong></h3>
                <h4>Email Id: mailshubham8995@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=mailshubham8995@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: 8603173965 / 8789847232</h4>

                
                
                        <a href="https://www.facebook.com/Shubhm08/">
                        <span className="icon fa fa-facebook" style={{color:'#3b5998'}}></span>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/__Shubham_08" >
                                <span className="icon fa fa-twitter"  style={{color:'#00acee'}}></span>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/Shubham-Modi08">
                                <span className="icon fa fa-github" style={{color:'#211F1F'}} ></span>
                        </a>&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/shubham-modi-9bb416133/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'#0077b5'}}></span>
                        </a>
                        
                
            </section>
        )
    }
}

export default Contact