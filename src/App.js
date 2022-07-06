import React, { useState } from 'react'
import "./App.css"
// Components
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Skills from './components/Skills';
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
       </div>
       ): (
       <div className='light'>
       <Navbar toggleDark={toggleDark} dark={dark} />
       <Home />
       <Skills />
       </div>
       )}
    </div>
  )
}

export default App