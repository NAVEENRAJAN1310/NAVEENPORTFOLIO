import React from 'react'
import "./MenuItem.css"

const MenuItem = (props) => {

    const styles = {
        animationDelay : `${props.delay}ms`
    }

    return (
        <>
            <div className='menuItem' style={styles}>
                <a href={"#" + props.value.toLowerCase()}>{props.value}</a>
            </div>
        </>
    )
}

export default MenuItem