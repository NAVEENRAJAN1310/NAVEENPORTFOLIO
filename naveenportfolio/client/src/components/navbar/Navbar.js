import React from 'react'
import './Navbar.css'
import { useDime } from '../context/Context'

const Navbar = () => {

const dimensions = useDime();

  return (
    <>
        <section id='navbar'>
            <div className='logo'></div>
            <div>{dimensions.scrollVal.scrolltoTop}</div>
            <div>{dimensions.scrollVal.scrolltoBottom}</div>
        </section>
    </>
  )
}

export default Navbar