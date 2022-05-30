import React, {useState} from 'react';

export default function Project () {
    

const [projects] = useState([
    {
        title: 'Weekly Witty Writing Prompts',
        url: 'https://weekly-witty-writing-prompts.herokuapp.com/',
        repository: 'https://github.com/hmailahn/weekly-witty-writing-prompt',
        description: 'Weekly Witty Writing Prompts is an application where users are presented with a weekly writing prompt and write stories based off that prompt or interact with other user stories.',
        technologies: 'React, MongoDB, Apollo-Server, Apollo-Client, Node.js, Express.js, Graphql, Bootstrap, Heroku, Git'
    },
    {
        title: 'Photo Port',
        url: 'https://hmailahn.github.io/photo-port/',
        repository: 'https://github.com/hmailahn/photo-port',
        description: "Photo Port is a single page application made from react to showcase a family friend's photography portfolio.",
        technologies: 'React, Node.js, Express.js, Git, GitHub Pages, CSS'
    },
    {
        title: 'Budget Tracker',
        url: 'https://budget-tracker-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/budget-tracker',
        description: 'Budget tracker is an application that allows a user to track withdrawls and deposits with or without data or internet connection.',
        technologies: 'Node.js, Express.js, Mongoose, Service Workers, Web Manifest, HTML, CSS'
    },
    {
        title: 'Pizza Hunt',
        url: 'https://pizza-hunt-hmailahn.herokuapp.com/',
        repository: 'https://github.com/hmailahn/pizza-hunt',
        description: 'Pizza hunt is a social media app for pizza lovers to create pizzas and join discussions on other users pizzas.',
        technologies: 'MongoDB, Mongoose, Node.js, Express.js, HTML, CSS, Heroku'
    },
    {
        title: 'Tech Blog',
        url: 'https://mighty-journey-90964.herokuapp.com/',
        repository: 'https://github.com/hmailahn/tech-blog',
        description: 'Tech Blog is a site where people in the tech community can post and connect with each other over shared blog posts.',
        technologies: 'Handlebars.js, bcrypt, mySQL, Sequelize, Node.js, Express.js, Heroku, HTML, CSS, MVC'
    },

    {
        title: 'WeatheredVibes',
        url: 'https://sepidehayani.github.io/WeatheredVibes/',
        repository: 'https://github.com/SepidehAyani/WeatheredVibes',
        description: 'WeatheredVibes is an application where users can search for a city and get the current weather and local news based on their search.',
        technologies: 'Open Weather API, TOMTOM API, GNews API, JavaScript, HTML, CSS, jQuery, Bulma'
    },


]);



    return (
        <section className="container-fluid mb-5">
<div id="projects" className="row justify-content-center">
{projects.map((image, i) => (

<div className="card port-cards col-auto m-4 " style={{ width: '30rem' }}>
<h3 className="card-title mt-4">{image.title}</h3>

<a href={image.url}>
  <img src={require(`../../assets/${i}.png`)} className=" port-img m-2" alt={image.title}></img>
  </a>

  <div class="card-body m-2">
    <a href={image.url} class="card-link">Project</a>
    <a href={image.repository} class="card-link">Repository</a>
    <p>{image.description}</p>
    <h6>Technologies used:</h6>
    <p>{image.technologies}</p>
  </div>
</div>


))}
</div>
</section>


);

    };

    // style={{textDecoration: 'none'}}