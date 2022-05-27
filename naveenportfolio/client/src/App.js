import { React } from 'react';

import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div id='app'>
      <div className='sample one'></div>
      <div className='sample two'></div>
      <div className='sample three'></div>
      </div>
      
    </>

  );
}

export default App;
