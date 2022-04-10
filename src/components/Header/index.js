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
    <ul className="flex-row">
        <li className="mx-2">
            <a href='#about'>
            About Me
            </a>
        </li>
        <li className="mx-2">
           Contact 
        </li>
        <li className="mx-2">
        <a href='#projects'>
            Projects
            </a>
        </li>
        <li className="mx-2">
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