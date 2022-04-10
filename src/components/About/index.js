import React from 'react'
import avatar from '../../assets/me.jpg';

function About () {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <img className="avatar" src={avatar} alt="Heidi"/>
            <div>
                <p>
                    Hi there! I'm Heidi, a full stack developer and wellness specialist. 
                </p>
            </div>
    
        </section>
    )
}

export default About
