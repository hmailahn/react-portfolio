import React from 'react'
import avatar from '../../assets/avatar.jpg';

function About () {
    return(
        <section>
            <div className="container aboutme">
                {/* <div className="row justify-content-center"> */}
                    {/* <div className="col-12"> */}
            <h1 id="about">About Me</h1>
            {/* </div>
            </div> */}
            {/* <div className="row justify-content-center">
            <div className="col-12"> */}
            <img className="avatar rounded mx-auto d-block" src={avatar} alt="Heidi"/>
            {/* </div>
            </div> */}

            {/* <div className="row justify-content-center">
                <div className="col-12"> */}
                <p className="">
                    Hi there! I'm Heidi! I'm a personable and driven full stack web developer with a background in 
                    wellness and a full stack certificate from the University of Minnesota Coding Bootcamp. With my experience and skills 
                    in Node.js, Express.js, Handlebars, MongoDB, JavaScript, CSS, HTML, and React, I love to develop meaningful server-side 
                    applications. I'm able to collaborate and work with a team while solving problems in high-stress environments as well 
                    as independently. I'm an articulate individual who enjoys connecting with people and am passionate about building applications 
                    that assist people to make their lives easier. I'm looking to bring attention to detail and technical skills to a company 
                    to grow and become a valuable asset. 
                </p>
            {/* </div>
            </div> */}
            </div>
        </section>
    )
}

export default About
