import React from 'react'
import Logo from '../navbar/components/Logo'
import FaceLogo from './components/FaceLogo'
import HeaderIcon from './components/HeaderIcon'
import "./navbar.css"

function Navbar() {
    return <div className='bg-nav'>
        <FaceLogo />
        <HeaderIcon />
        <Logo />
    </div>
}
export default Navbar