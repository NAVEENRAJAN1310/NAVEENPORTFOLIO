import { React } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {

  return (
    <>
      <Navbar />
      <div id='app'>
        <Home />
        <About/>
        <div className='sample two' id="experience"></div>
        <div className='sample three' id="work"></div>
        <div className='sample four' id="contact"></div>
      </div>

    </>

  );
}

export default App;
