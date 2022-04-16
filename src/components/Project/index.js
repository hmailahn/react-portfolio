import React, {useState} from 'react';

export default function Project () {
    

const [projects]=  useState([
    {
        title: 'Photo Port',
        url: 'https://hmailahn.github.io/photo-port/',
        repository: 'https://github.com/hmailahn/photo-port'
    },
    {
        title: 'Budget Tracker',
        url: 'https://budget-tracker-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/budget-tracker'
    },
    {
        title: 'Pizza Hunt',
        url: 'https://pizza-hunt-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/pizza-hunt'
    },
    {
        title: 'Tech Blog',
        url: 'https://mighty-journey-90964.herokuapp.com/',
        repository: 'https://github.com/hmailahn/tech-blog'
    },
    {
        title: 'Outfitters',
        url: 'https://outfitters-agent-shields.herokuapp.com/login',
        repository: 'https://github.com/hmailahn/outfitters'
    },
    {
        title: 'WeatheredVibes',
        url: 'https://sepidehayani.github.io/WeatheredVibes/',
        repository: 'https://github.com/SepidehAyani/WeatheredVibes'
    },


]);
// const currerntProjects = Project.filter(project => project.projectitem === projectitem);

    return(
        <div id="projects">
        {projects.map((image, i) => (
          <a href={image.link}>
          <img className="projectItem"
            src={require(`../../assets/${i}.png`)}
            alt={image.title}
            key={image.title}
            href={image.url}
          />
          <a className='projectTitle' href={image.repository}>{image.title}</a>
      </a>
        ))}
      </div>
      );
    };