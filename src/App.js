import React, { useState } from 'react'
import "./App.css"
// Components
import Navbar from "./components/Navbar";
import Home from './components/Home';
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
       </div>
       ): (
       <div className='light'>
       <Navbar toggleDark={toggleDark} dark={dark} />
       <Home />
       </div>
       )}
    </div>
  )
}

export default App