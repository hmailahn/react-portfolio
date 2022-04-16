import React from 'react'

const Nav = (props) => {
    const { pages, setCurrentPage, currentPage } = props;
  
    // useEffect(() => {
    //   document.title = upperCase(currentPanel);
    // }, [currentPanel]);
  
    return (
      <nav>
        <ul>
          {pages.map((pages) => (
            <li key={pages}>
              <span
                className={pages === currentPage ? 'navActive' : undefined}
                onClick={() => {
                  setCurrentPage(pages);
                }}
              >
                {/* {upperCase(panel)} */}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Nav;