import './App.css';
import Navbar from './components/navbar/Navbar';
import { useDime } from './components/context/Context';

function App() {

  const dimensions = useDime();

  const appScroll = (e)=>{
    // console.log(e);
  }

  return (
    <>
      <Navbar />
      <div id='app' onScroll={appScroll}>
        {console.log(dimensions)}
      </div>
      <div className='sample one'></div>
        <div className='sample two'></div>
        <div className='sample three'></div>
    </>

  );
}

export default App;
