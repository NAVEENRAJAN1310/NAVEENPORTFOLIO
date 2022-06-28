import React from 'react'
import "./About.css"
import myImage from "./myImage.png"


const About = () => {
    return (
        <div className='sample one' id="about">
            <div className='aboutContainer'>
                <div className='aboutText'>
                    <h2>About Me <span></span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    culpa qui officia deserunt mollit anim id est laborum.dipiscing elit, sed do eiusmod tempor incididunt ut 
                    culpa qui officia deserunt mollit anim id estdipiscing elit, sed do eiusmod tempor incididunt ut 
                    culpa qui officia deserunt mollit anim id est</p>
                    <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their 
                    dry-transfer sheets,The passage experienced a surge dipiscing elit, sed do eiusmod tempor incididunt ut 
                    culpa qui officia deserunt mollit anim id est in popularity during the 1960s when Letraset 
                    used it on their dry-transfer sheets,anim id est in popularity during the 1960s when Letraset 
                    used it on their dry-transfer sheets,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='aboutImageContainer'>
                    <div className='imageContainer'>
                        <img src={myImage} alt="Naveen"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About