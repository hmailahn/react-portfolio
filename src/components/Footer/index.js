import React from 'react'

function Footer () {
    return(
<footer style={{position:"fixed",bottom:"0"}}>
    <div>
    <a href="https://github.com/hmailahn">
        <img
          src={require(`../../assets/icons/github.png`)}
          alt="GitHub icon"
          className="icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/heidi-mailahn-15005a136/">
        <img
          src={require('../../assets/icons/linkedin.png')}
          alt="LinkedIn icon"
          className="icon"
        />
      </a>
      <a href="mailto:mailahnheidi@gmail.com">
        <img
          src={require('../../assets/icons/email.jpg')}
          alt="Email icon"
          className="icon"
        />
      </a>
    </div>
    <div>
    Made with ❤️ by Heidi Mailahn
    </div>
    </footer>
    )
}

export default Footer