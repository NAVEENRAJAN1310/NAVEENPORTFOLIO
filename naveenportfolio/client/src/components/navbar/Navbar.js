import React, { useState } from 'react'
import './Navbar.css'
import { useDime, useWinWidthGreat, useWinWidthLesser,useSetScroll } from '../context/Context'
import mainLogo from "./nfavicon.svg"
import MenuItem from './MenuItems/MenuItem'
import MenuOverLay from './menuoverlay/MenuOverLay'
import { navBarStyle, menuIconStyle, logoContainerStyle, logoStyle, menusStyle,menuItemStyleContact } from './NavBarStyles'



const Navbar = () => {

  const dimensions = useDime();

  const styles = {
    opacity: dimensions.scrState === "up" ? 1 : 0,
  }
  const menuStyles = {
    display: useWinWidthLesser(820) && "block",
    position: useWinWidthLesser(820) && "relative"
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
      <section id='navbar' style={{...navBarStyle(dimensions.windowPos.wwidth),...styles}}>
        <div className='logoContainer' style={logoContainerStyle(dimensions.windowPos.wwidth)}>
          <div className='logo' style={logoStyle(dimensions.windowPos.wwidth)}>
            <img src={mainLogo} alt="N" />
          </div>
        </div>
        <div id="menuContainer">
        <div className='menus' style={{...menuStyles,...menusStyle(dimensions.windowPos.wwidth)}}>
          {useWinWidthGreat(820) ?
            <>
              <MenuItem value={"About"} delay={'100'} />
              <MenuItem value={"Experience"} delay={'200'} />
              <MenuItem value={"Work"} delay={'300'} inlineStyle={{marginLeft : "-5px"}}/>
              <MenuItem value={"Contact"} delay={'400'}  inlineStyle={menuItemStyleContact(dimensions.windowPos.wwidth)}/>
              <button className='resumeBtn'>Resume</button>
            </> :
            <div className='menuIcon' onClick={menuIconClick} style={menuIconStyle(dimensions.windowPos.wwidth)}>
              <div className='lines one'></div>
              <div className='lines two'></div>
              <div className='lines three'></div>
            </div>}
            {overlay && <MenuOverLay handleClose={closeFromChild}/>}
        </div>
        </div>
      </section>
    </>
  )
}

export default Navbar


