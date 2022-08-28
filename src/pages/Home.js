import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Minsung</h2>
        <div className="prompt">
          <p>A Front End developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, jQuery, </span>
          </li>
          <li className="item">
            <h2>Other</h2>
            <span>Agile </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
