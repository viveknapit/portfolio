import React from 'react';
import './Intro.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import glassesimoji from '../../img/glassesimoji.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';

export const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Vivek Napit</span>
                <span>Passionate Full-Stack Developer creating innovative web solutions from front-end to back-end.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/viveknapit"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/viveknapit/"><img src={linkedin} alt="" /></a>
                <a href="https://www.instagram.com/viveknapit1"><img src={instagram} alt="" /></a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img src={boy} alt="" />
        </div>
    </div>
  )
}
