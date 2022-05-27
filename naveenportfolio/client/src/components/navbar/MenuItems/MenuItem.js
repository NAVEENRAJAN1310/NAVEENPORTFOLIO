import React from 'react'
import "./MenuItem.css"

const MenuItem = (props) => {
    return (
        <>
            <div className='menuItem'>
                <a href={"#" + props.value.toLowerCase()}>{props.value}</a>
            </div>
        </>
    )
}

export default MenuItem