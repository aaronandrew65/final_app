import React from 'react';
import { NavBar } from './components/NavBar';
import './App.css'
import { Link } from 'react-router-dom';
import Headshot from './assets/images/Montoya.JPG'


export const About = () => {

    // const classes = useStyles;

  return (
    <>
    <NavBar />
    <div className='app'>
        <h1><Link to='/'>Montoya's Movie Mania</Link></h1>
    </div>
    <div>
        <img src={Headshot} alt='movie' className='image'/>
    </div>
    <div>
        <h2>
            I am a current educator that is trying to become a Web Developer. Feel free to use my website to track current movies that you would like to watch.
        </h2>
    </div>
    </>
  )
}

export default About;