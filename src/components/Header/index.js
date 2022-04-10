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
        <a href='https://docs.google.com/document/d/1RQh1Q6Zeh9Jy1CCmUge-VypI4Z9cV_L1ZQuftpDbCJY/edit'>
            Resume
            </a>
        </li>
    </ul>
</nav>
</header>
    )
}

export default Header