import React from "react";

function Resume() {
  return (
    <div className="resume">
      <a className="btn resume p-3" href={require('./resume.pdf')} download>
        Click HERE to download my resume!
      </a>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Responsive Web Design</li>
        <li>Git</li>
        <li>jQuery</li>
        <li>AJAX</li>
        <li>BootStrap</li>
        <li>Handlebars</li>
        <li>React</li>
      </ul>
      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>mySQL</li>
        <li>MongoDB</li>
        <li>TDD</li>
        <li>OOP</li>
        <li>PWA</li>
        <li>Redux</li>
      </ul>
    </div>
  );
}

export default Resume;
