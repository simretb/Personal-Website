import React, { Component } from 'react'
import simi from './simi.jpg'

import './About.css'

 class About extends Component {
    render() {
        return (
            <div className="about">
{/*                 
                <div className="pic-abt">
                    <img src={simi} />
            
                </div> */}
                <div className="about-para">
                    <h2>
                        Who am I?
                    </h2>
                    <p>
                        My name is Simret Belay. I am originaly from from northen Ethiopia, Tigray! I am a front end developer!
                    </p>
                    <h2>
                        What I love to do:
                    </h2>
                    <p>
                        I love coding and watching comedy on my spare time. My favariot tv show is, Friends. 
                    </p>
                    <h2>
                      My goal:
                    </h2>
                    <p>
                        My biggest dream is to see my self make a diffrence in the tech industry. I also dream about teaching coding to those who are interested in learning how to code.
                    </p>
                </div>
            </div>
        )
    }
}
export default About