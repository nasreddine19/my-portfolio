import React, { useState } from 'react'
import "./App.css"
// Components
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {

  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark)
    console.log(dark)
  }
  return (
    <div>
      {
      dark ?(
       <div className='dark'>
       <Navbar toggleDark={toggleDark} dark={dark} />
       <Home />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
       </div>
       ): (
       <div className='light'>
       <Navbar toggleDark={toggleDark} dark={dark} />
       <Home />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
       </div>
       )}
    </div>
  )
}

export default App