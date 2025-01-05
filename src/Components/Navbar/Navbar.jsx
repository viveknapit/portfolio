import React from 'react';
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vivek Napit</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Achievements</li>
                    
                </ul>
            </div>
            <button className="button n-button">
                Contact us
            </button>
        </div>
    </div>
  )
}