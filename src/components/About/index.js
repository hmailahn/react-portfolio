import React from 'react'
import avatar from '../../assets/avatar.jpg';

function About () {
    return(
        <section>
            <div className="container aboutme">
              
            <h1 id="about">About Me</h1>
        
            <img className="avatar rounded mx-auto d-block" src={avatar} alt="Heidi"/>
        
        
                <p className="">
                    Hi there, I'm Heidi! 
                    <br>
                    </br>
                      I'm a full stack web developer and a wellness specialist.
                    <br></br>
                  I currently live in Minneapolis, MN with my roommate and two cats. We love checking out the local lakes and getting out on the town!
                    <br>
                    </br> 
                    I recently received a full stack certification from the University of Minnesota where I had the opportunity 
                    to learn and enhance my skills on HTML, CSS, JavaScript, the MERN stack, and mySQL. 
                    <br>
                    </br>
                    I love creating server-side applications that users find easy, helpful, and fun to use. 
                    <br>
                    </br>
                    I'm a valuable team player and love collaborating with others to find out of the box solutions and ideas. 
                    <br>
                    </br>
                    I'm self-driven, ambitious, and entergetic about the work I do. 
                    <br></br>
                    With my unique background in the wellness industry, I have a passion for connecting with others and guiding them in their different wellness jounreys to a happier life.
                    <br></br>
                    I'd love to work with you and see how we can turn your passions and projects to life!
                </p>
    
            </div>
        </section>
    )
}

export default About
