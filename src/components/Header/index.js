import React from 'react'

function Header () {
    return(
        <header>
<h1>
<a href='/'>
    Heidi Mailahn
    </a>
    </h1>
<nav>
    <ul>
        <li>
            <a href='#about'>
            About Me
            </a>
        </li>
        <li>
            <a href='#contact'>
           Contact 
           </a>
        </li>
        <li>
        <a href='#projects'>
            Projects
            </a>
        </li>
        <li>
        <a href='#resume'>
            Resume
            </a>
        </li>
    </ul>
</nav>
</header>
    )
}

export default Header