import React from 'react';
import About from './components/About';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Contact from "./components/Contact";
import Nav from "./components/Nav";
// import Project from "./components/Project";

function App() {
  return (
   <div>
<Nav />
<main>
  <About />
  {/* <Project /> */}
</main>
{/* <Footer /> */}
   </div>
  );
}

export default App;
