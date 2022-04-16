import React, { useState } from 'react';
import About from './components/About';
import Footer from "./components/Footer";
// import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
import Project from "./components/Project";

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  //method to see current page
  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />
    }
    if(currentPage === 'Project') {
      return <Project />
    }
    if(currentPage === 'ContactForm') {
      return <ContactForm />
    }
    // if(currentPage === 'Resume') {
    //   return <Resume />
    // }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div>
<Nav  currentPage={currentPage} handlePageChange={handlePageChange} />
{/* <main>

  <About></About>
  <ContactForm></ContactForm>
  <Project />
</main> */}

{renderPage()}
<Footer />
   </div>
  );
}

export default App;
