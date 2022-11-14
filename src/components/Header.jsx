import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg'
import "./header.scss"


const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <div className="row">
                <div className="logo">
                    <Link to="/">Gaurav .</Link>
                </div>
                <div className="nav-toggle">
                    <div className="hamburger-menu">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hamburger-menu-close">
                        <UpArrow/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header