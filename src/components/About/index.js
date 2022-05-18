import React from 'react'
import avatar from '../../assets/avatar.jpg';

function About () {
    return(
        <section>
            <div className="container aboutme">
              
            <h1 id="about">About Me</h1>
        
            <img className="avatar rounded mx-auto d-block" src={avatar} alt="Heidi"/>
        
        
                <p className="">
                    Hi there, I'm Heidi! Minneapolis, MN is where I currently call home with my best friend and two cats! 
                    I'm a full stack web developer with a background in wellness and a passion for connecting with others. 
                    I recently received a full stack certification from the University of Minnesota where I had the opportunity 
                    to learn and enhance my skills on HTML, CSS, JavaScript, the MERN stack, and mySQL. 
                    I love creating server-side applications that users find easy, helpful, and fun to use. 
                    I'm a valuable team player and love collaborating with others to find out of the box solutions and ideas. 
                    I'm self-driven, ambitious, and entergetic about the work I do. 
                    I'd love to work with you and see how we can turn your passions and projects to life!
                </p>
    
            </div>
        </section>
    )
}

export default About
