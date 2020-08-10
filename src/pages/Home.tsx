import React, { Fragment } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Intro from '../components/Intro';
import About from '../components/About';
import Bio from '../components/Bio';
import Contact from '../components/Contact';

const Home = () => {


    // TODO Add color/theme picker



    return (
        <Fragment>
            <header className="App-header">
                <Intro />
                <About />
                <Bio />
                <Contact />
            </header>
        </Fragment>
    )

}


export default Home;