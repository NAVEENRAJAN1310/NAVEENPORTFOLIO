import React from 'react'
import './Navbar.css'
import { useDime,useWinWidthGreat,useWinWidthLesser } from '../context/Context'
import mainLogo from "./nfavicon.svg"
import MenuItem from './MenuItems/MenuItem'

const Navbar = () => {

const dimensions = useDime();

  const styles = {
    opacity : dimensions.scrState === "up" ? 1 : 0,
  }
  const menuStyles = {
    display : useWinWidthLesser(1050) && "block",
    backgroundColor : useWinWidthLesser(1050) && "red",
    position : useWinWidthLesser(1050) && "relative"
  }

  return (
    <>
        <section id='navbar' style={styles}>
            <div className='logo'>
            <img src={mainLogo} alt="N"/>
            </div>
            <div className='menus' style={menuStyles}>
              
              {useWinWidthGreat(1050) ? 
                <>
                <MenuItem value={"About"} delay={'100'}/>
                <MenuItem value={"Experience"} delay={'200'}/>
                <MenuItem value={"Work"} delay={'300'}/>
                <MenuItem value={"Contact"} delay={'400'}/>
                <button className='resumeBtn'>Resume</button>
              </> :
              <div className='menuIcon'>
                <div className='lines one'></div>
                <div className='lines two'></div>
                <div className='lines three'></div> 
            </div>}
            </div>
            
            
          
        </section>
    </>
  )
}

export default Navbar