import React from 'react'
import "./MenuItem.css"

const MenuItem = (props) => {

    const styles = {
        animationDelay : `${props.delay}ms`,
        animationName : `${props.animeName === "none" ?props.animeName :  "menuLate" }`
    }

    return (
        <>
            <div className='menuItem' style={{...styles,...props.inlineStyle}} >
                <a href={"#" + props.value.toLowerCase()}>{props.value}</a>
            </div>
        </>
    )
}

export default MenuItem