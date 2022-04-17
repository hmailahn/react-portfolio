import React from 'react'

// const Nav = (props) => {
//     const { pages, setCurrentPage, currentPage } = props;
  
//     // useEffect(() => {
//     //   document.title = upperCase(currentPanel);
//     // }, [currentPanel]);
  
//     return (
//       <nav>
//         <ul>
//           {pages.map((pages) => (
//             <li key={pages}>
//               <span
//                 className={pages === currentPage ? 'navActive' : undefined}
//                 onClick={() => {
//                   setCurrentPage(pages);
//                 }}
//               >
//                 {/* {upperCase(panel)} */}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };
  

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    // <nav className="nav">
    <ul className="nav justify-content-center nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('ContactForm')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    // </nav>
  );
}

  export default Nav;