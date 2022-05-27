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

  return (
    <>
        <section id='navbar' style={styles}>
            <div className='logo'>
            <img src={mainLogo} alt="N"/>
            </div>
            {useWinWidthGreat(1050) && <div className='menus'>
                <MenuItem value={"About"}/>
                <MenuItem value={"Experience"}/>
                <MenuItem value={"Work"}/>
                <MenuItem value={"Contact"}/>
                <button className='resumeBtn'>Resume</button>
            </div>}
        </section>
    </>
  )
}

export default Navbar