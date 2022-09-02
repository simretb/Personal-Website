import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Footer.css';

 class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer-container">
                    <div className="icons">
                        <a href="https://github.com/simretb/Mern_stack-project" class="fa fa-github"></a>
                        <a href="https://www.linkedin.com/in/simret-belay/" class="fa fa-linkedin"></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" class="fa fa-google"></a>
                        
                     </div>
                </div>
            </div>
        )
    }
}
export default Footer