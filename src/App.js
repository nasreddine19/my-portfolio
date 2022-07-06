import React, { useState } from 'react'
import "./App.css"
import Navbar from "./components/Navbar";
const App = () => {

  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark)
    console.log(dark)
  }
  return (
    <div className={dark ? "dark" : "light"}>
      {dark ?
       <Navbar toggleDark={toggleDark} dark={dark} />
       : 
       <Navbar toggleDark={toggleDark} dark={dark} />}
    </div>
  )
}

export default App