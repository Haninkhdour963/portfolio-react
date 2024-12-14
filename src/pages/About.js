import React from 'react';
import GraduateHatImage from '../assets/Graduate-Hat-1.png';
import ChatLang3Image from '../assets/Chat-lang3.png';
import MindBodyGreenImage from '../assets/MindBodyGreen-exp.png';



const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <div className="about-details">
      <div className="education">
        <img src={GraduateHatImage} alt="Education Icon" />
        <h3>Education</h3>
        <p><b>Software Engineering 2008 - 2013</b></p>
      </div>
      <div className="languages">
        <img src={ChatLang3Image} alt="Languages Icon" />
        <h3>Languages</h3>
        <div className="bar"><span style={{width: '100%'}}>Arabic</span></div>
        <div className="bar"><span style={{width: '90%'}}>English</span></div>
        <div className="bar"><span style={{width: '40%'}}>Turkish</span></div>
        <div className="bar"><span style={{width: '40%'}}>Germany</span></div>
      </div>
      <div className="education">
        <img src={MindBodyGreenImage} alt="Education Icon" />
        <h3>Experience</h3>
        <p><b>Now - Full Stack Developer Trainee at Orange Academy - Jordan</b></p>
      </div>
    </div>
  </section>
);

export default About;
