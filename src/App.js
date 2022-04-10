import React, { useState } from 'react';
import About from './components/About';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Nav from "./components/Nav";
// import Project from "./components/Project";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
   <div>
<Nav />
<main>

  <About></About>
  <ContactForm></ContactForm>
  {/* <Project /> */}
</main>
{/* <Footer /> */}
   </div>
  );
}

export default App;
