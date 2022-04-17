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
            <div  className="container projectItem">
                <div className="row justify-content-around">
                    <div class="col-4">
          <a href={image.url}>
              <h3>{image.title}</h3>
              
          <img 
            src={require(`../../assets/${i}.png`)}
            alt={image.title}
            key={image.title}
            href={image.url}
          />
          <a className='projectTitle' href={image.repository}>Repository</a>
      </a>
</div>
</div>
</div>
        ))}
      
      </div>
      );
    

//     return (
// <div id="projects">
// {projects.map((image, i) => (

// <div class="card" style="width: 18rem;">
//   <img src={require(`../../assets/${i}.png`)} class="card-img-top" alt={image.title}></img>
//   <div class="card-body">
//     <h5 class="card-title">{image.title}</h5>
//   </div>
//   <div class="card-body">
//     <a href={image.url} class="card-link">Project</a>
//     <a href={image.repository} class="card-link">Repository</a>
//   </div>
// </div>


// ))}
// </div>


// );

    };