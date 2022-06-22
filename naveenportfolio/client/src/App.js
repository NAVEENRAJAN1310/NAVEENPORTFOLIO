import { React } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {

  return (
    <>
      <Navbar />
      <div id='app'>
      <Home/>
      <div className='sample one' id="about"></div>
      <div className='sample two' id="experience"></div>
      <div className='sample three' id="work"></div>
      <div className='sample four' id="contact"></div>
      </div>
      
    </>

  );
}

export default App;
