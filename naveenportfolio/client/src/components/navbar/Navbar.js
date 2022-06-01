import React, { useState } from 'react'
import './Navbar.css'
import { useDime, useWinWidthGreat, useWinWidthLesser,useSetScroll } from '../context/Context'
import mainLogo from "./nfavicon.svg"
import MenuItem from './MenuItems/MenuItem'
import MenuOverLay from './menuoverlay/MenuOverLay'
import { menuIconStyle } from './NavBarStyles'



const Navbar = () => {

  const dimensions = useDime();

  console.log(dimensions.windowPos.wwidth);

  const styles = {
    opacity: dimensions.scrState === "up" ? 1 : 0,
    height: useWinWidthLesser(1050) && "80px",
  }
  const menuStyles = {
    display: useWinWidthLesser(1050) && "block",
    position: useWinWidthLesser(1050) && "relative"
  }

  const closeFromChild = (value) => {
    setOverlay(value);
    dimensions.setScrollngAnime(value);
  }

  const menuIconClick = (e) => {
    setOverlay(true);
    dimensions.setScrollngAnime(true);
  }

  const [overlay,setOverlay] = useState(false);

  return (
    <>
      <section id='navbar' style={styles}>
        <div className='logo'>
          <img src={mainLogo} alt="N" />
        </div>
        <div className='menus' style={menuStyles}>

          {useWinWidthGreat(1050) ?
            <>
              <MenuItem value={"About"} delay={'100'} />
              <MenuItem value={"Experience"} delay={'200'} />
              <MenuItem value={"Work"} delay={'300'} />
              <MenuItem value={"Contact"} delay={'400'} />
              <button className='resumeBtn'>Resume</button>
            </> :
            <div className='menuIcon' onClick={menuIconClick} style={menuIconStyle(dimensions.windowPos.wwidth)}>
              <div className='lines one'></div>
              <div className='lines two'></div>
              <div className='lines three'></div>
            </div>}
            {overlay && <MenuOverLay handleClose={closeFromChild}/>}
        </div>
        


      </section>
    </>
  )
}

export default Navbar


