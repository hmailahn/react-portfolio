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
                    Hi there! I'm Heidi, a full-stack developer and wellness specialist living in Minneapolis, MN.
                </p>
            {/* </div>
            </div> */}
            </div>
        </section>
    )
}

export default About
