import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='app-navbar'>

      <div>
        LOGO
      </div>

      <div className='links'>
        <div className='link1'><Link to='/'>Home</Link></div>
        <div className='link2'><Link to='/login'>Login</Link></div>
        <div className='link3'><Link to='/signUp'>Sign Up</Link></div>
        <div className='link4'><Link to='/admin'>Admin</Link></div>
      </div>

      <div>
        CART
      </div>
      
    </div>
  )
}
export default Navbar
