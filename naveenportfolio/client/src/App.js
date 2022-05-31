import { React } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div id='app'>
      <div className='sample one' id="about"></div>
      <div className='sample two' id="experience"></div>
      <div className='sample three' id="work"></div>
      </div>
      
    </>

  );
}

export default App;
