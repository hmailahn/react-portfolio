import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer'

// import About from './components/About';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ContactForm from "./components/Contact";
// // import Nav from "./components/Nav";
// import Project from "./components/Project";

// function App() {
//   const pages = [ 'about', 'contact', 'projects'];
//   const [currentPage, setCurrentPage] = useState(pages[2]);

//   // //method to see current page
//   // const renderPage = () => {
//   //   if(currentPage === 'About') {
//   //     console.log('about')
//   //     return <About />
     
//   //   }
//   //   if(currentPage === 'Project') {
//   //     console.log('project')
//   //     return <Project />
//   //   }
//   //   if(currentPage === 'ContactForm') {
//   //     console.log('form')
//   //     return <ContactForm />
//   //   }
//   //   // if(currentPage === 'Resume') {
//   //   //   return <Resume />
//   //   // }
//   // }

//   // const handlePageChange = (page) => setCurrentPage(page);

//   return (
//    <div>
// <Header
// pages={pages} 
// setCurrentPage={setCurrentPage}
// currentPage={currentPage}
// />
// <main>
// {currentPage === 'about' && <About />}
// {currentPage === 'contact' && <ContactForm />}
// {currentPage === 'project' && <Project />}
// {/* {currentPage === 'resume' && <Resume />} */}

// </main>

// {/* {renderPage()} */}
// <Footer />
//    </div>
//   );
// }


function App() {
    return (
        <div>
<PortfolioContainer />
  <Footer />
  </div>
    )
};

// const App = () => 
// return (

// )
// ;

export default App;
