import React from 'react'
import avatar from '../../assets/avatar.jpg';

function About () {
    return(
        <section>
            <div className="about">
            <h1 id="about">About Me</h1>
            <img className="avatar" src={avatar} alt="Heidi"/>
            <div>
                <p className="">
                    Hi there! I'm Heidi, a full stack developer and wellness specialist. 
                </p>
            </div>
            </div>
        </section>
    )
}

export default About
