import React, { useEffect } from 'react'
import { useWinWidthGreat, useWinWidthLesser, SetScroll } from '../../context/Context'
import "./MenuOverLay.css"
import MenuItem from '../MenuItems/MenuItem'

const MenuOverLay = (props) => {

    const btnStyle = {
        animationName : "none",
        opacity: 1
    }

    const clickClose = (e) => {
        props.handleClose(false);
    }

    return (
        <>
            <div id="menuOverlay"></div>
            <div id="menuOverlayContainer">
                <>
                    <MenuItem value={"About"} animeName={"none"}/>
                    <MenuItem value={"Experience"} animeName={"none"}/>
                    <MenuItem value={"Work"} animeName={"none"}/>
                    <MenuItem value={"Contact"} animeName={"none"}/>
                    <button className='resumeBtn' style={btnStyle}> Resume</button>
                </>
                <div id='closeBtn' onClick={clickClose}>
                    X
                </div>
            </div>
        </>
    )
}

export default MenuOverLay