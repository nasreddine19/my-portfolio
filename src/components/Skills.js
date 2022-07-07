import React from 'react'
// Images
import html from "../img/HTML5.png"
import css from "../img/CSS3.png"
import js from "../img/JS.png"
import react from "../img/React.png"
import git from "../img/git.png"
const Skills = () => {
  return (
    <div className='skills-container'>
        <h3 className='skills-header'>Skills</h3>
        <div className='skills-img'>
            <img src={html} alt="html5-pic"/>
            <img src={css} alt="css3-pic"/>
            <img src={js} alt="js-pic"/>
            <img src={react} alt="react-pic"/>
            <img src={git} alt="git-pic"/>
        </div>
    </div>
  )
}

export default Skills