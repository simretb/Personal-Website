import React, { Component } from 'react'
import './Skills.css'


 class Skills extends Component {
    render() {
        return (
            <div className='myskills'>
              <p> HTML</p>
              <div class="skills-container">
                    <div class="skills html">90%</div>
            </div>

            <p>CSS</p>
                <div class="skills-container">
                    <div class="skills css">80%</div>
                </div>

            <p>JavaScript</p>
                <div class="skills-container">
                    <div class="skills js">80%</div>
                </div>
            <p>Python</p>
                <div class="skills-container">
                    <div class="skills py">75%</div>
                </div>
            <p>MERN</p>
                <div class="skills-container">
                    <div class="skills mern">75%</div>
                </div>
        
            </div>
        )
    }
}
export default Skills