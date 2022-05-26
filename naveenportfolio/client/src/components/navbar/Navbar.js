import React from 'react'
import './Navbar.css'
import { useDime } from '../context/Context'

const Navbar = () => {

const dimensions = useDime();

  const styles = {
    opacity : dimensions.scrState === "up" ? 1 : 0
  }

  return (
    <>
        <section id='navbar' style={styles}>
            <div className='logo'></div>
            {/* <h1>{dimensions.scrState}</h1> */}
        </section>
    </>
  )
}

export default Navbar