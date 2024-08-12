import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
    <h2>About Me</h2>  
    <p>This is About me page : I am an Aspiring Software Dev with great Passion in React JS</p>
    <img src={image} alt="I made this"></img> 
    </div>;
}

export default About;


