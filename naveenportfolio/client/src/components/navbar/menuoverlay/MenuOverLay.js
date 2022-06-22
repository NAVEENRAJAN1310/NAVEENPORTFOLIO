import React from 'react'
// import { useWinWidthGreat, useWinWidthLesser, SetScroll } from '../../context/Context'
import "./MenuOverLay.css"
import MenuItem from '../MenuItems/MenuItem'

const MenuOverLay = (props) => {

    const btnStyle = {
        animationName: "none",
        opacity: 1
    }

    const menuInlineStyle = {
        top: "0",
        transform: "translate(0,0)"
    }

    const clickClose = (e) => {
        props.handleClose(false);
    }

    return (
        <>
            <div id="menuOverlay">
                <div id="menuOverlayBackground">

                </div>
                <div id="menuOverlayContainer">
                    <>
                        <MenuItem value={"About"} animeName={"none"} inlineStyle={menuInlineStyle} handleMenuCLick = {clickClose}/>
                        <MenuItem value={"Experience"} animeName={"none"} inlineStyle={menuInlineStyle} handleMenuCLick = {clickClose}/>
                        <MenuItem value={"Work"} animeName={"none"} inlineStyle={menuInlineStyle} handleMenuCLick = {clickClose}/>
                        <MenuItem value={"Contact"} animeName={"none"} inlineStyle={menuInlineStyle} handleMenuCLick = {clickClose}/>
                        <button className='resumeBtn' style={btnStyle}> Resume</button>
                    </>
                    <div id='closeBtn' onClick={clickClose}>
                        X
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuOverLay