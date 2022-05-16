import React, {useState} from 'react';

export default function Project () {
    

const [projects] = useState([
    {
        title: 'Weekly Witty Writing Prompts',
        url: 'https://weekly-witty-writing-prompts.herokuapp.com/',
        repository: 'https://github.com/Nate-Huerd/weekly-witty-writing-prompt',
        description: 'Weekly Witty Writing Prompts is an application where users are presented with a weekly writing prompt and write stories based off that prompt or interact with other user stories.'
    },
    {
        title: 'Photo Port',
        url: 'https://hmailahn.github.io/photo-port/',
        repository: 'https://github.com/hmailahn/photo-port',
        description: "Photo Port is a single page application made from react to showcase a family friend's photography portfolio."
    },
    {
        title: 'Budget Tracker',
        url: 'https://budget-tracker-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/budget-tracker',
        description: 'Budget tracker is an application that allows a user to track withdrawls and deposits with or without data or internet connection.'
    },
    {
        title: 'Pizza Hunt',
        url: 'https://pizza-hunt-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/pizza-hunt',
        description: 'Pizza hunt is a social media app for pizza lovers to create pizzas and join discussions on other users pizzas.'
    },
    {
        title: 'Tech Blog',
        url: 'https://mighty-journey-90964.herokuapp.com/',
        repository: 'https://github.com/hmailahn/tech-blog',
        description: 'Tech Blog is a site where people in the tech community can post and connect with each other over shared blog posts.'
    },

    {
        title: 'WeatheredVibes',
        url: 'https://sepidehayani.github.io/WeatheredVibes/',
        repository: 'https://github.com/SepidehAyani/WeatheredVibes',
        description: 'WeatheredVibes is an application where users can search for a city and get the current weather and local news based on their search.'
    },


]);

//=======================================================
///don't deelte yet

//     return(
//         <div id="projects">
//         {projects.map((image, i) => (
//             <div  className="container">
//                 <div className="row justify-content-around">
//                     <div className="col-4">
//           <a href={image.url}>
//               <h3>{image.title}</h3>
              
//           <img 
//             src={require(`../../assets/${i}.png`)}
//             alt={image.title}
//             key={image.title}
//             href={image.url}
//           />
//           <a className='projectTitle' href={image.repository}>Repository</a>
//       </a>
// </div>
// </div>
// </div>
//         ))}
      
//       </div>
//       );
    

//================================================================

    return (
<div id="projects">
{projects.map((image, i) => (

<div className="card mb-3">
  <img src={require(`../../assets/${i}.png`)} class="projectImg" alt={image.title}></img>
  <div className="card-body">
    <h5 className="card-title">{image.title}</h5>
  </div>
  <div class="card-body">
    <a href={image.url} class="card-link">Project</a>
    <a href={image.repository} class="card-link">Repository</a>
    <p>{image.description}</p>
  </div>
</div>


))}
</div>


);

    };