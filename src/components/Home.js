import React from "react";
import nasro from "../img/Nasro.jpg";
const Home = () => {
  return (
    <div className="home">
      <img className="nasro-pic" src={nasro} alt="nasro-pic" />
      <div className="details">
        <h2 className="name">Nasreddine Boudellal</h2>
        <p className="summary">
          Innovative Front End Developer with 3 years experience building and
          maintaining responsive websites in the recruiting industry. <br /> Proficient
          in HTML, CSS, JavaScript; plus modern libraries and frameworks.
          Passionate about usability and possess working knowledge of Figma,
          Adobe Photoshop and Adobe Illustrator.
        </p>
      </div>
    </div>
  );
};

export default Home;
