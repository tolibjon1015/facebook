import React from 'react'
import Logo from '../navbar/components/Logo'
import FaceLogo from './components/FaceLogo'
import Input from './components/Input'
import "./navbar.css"

function Navbar() {
    return <div className='bg-nav'>
        <FaceLogo />
        <Input />
        <Logo />
    </div>
}
export default Navbar