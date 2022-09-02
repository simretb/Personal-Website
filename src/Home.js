import React, { Component } from 'react'
import simi from './img/simret.jpg'
import About from './components/About/About'
import './App.css';

 class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="pic">
                    <img src={simi} />
                </div>
                <div className="intro">
                    <p>Hello there! My name is Simret Belay and I am a Full-stack developer and Code Coach!</p>
                    
        
                </div>
            {/* <About/> */}
            </div>
        )
    }
}
export default Home;