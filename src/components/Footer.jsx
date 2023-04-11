import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div>
                <h4 className='footer-col-title'>Doormat Navigation</h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h4 className='footer-col-title'>Contact</h4>
                <ul>
                    <li>Adress</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <h4 className='footer-col-title'>Social Media Links</h4>
                <ul className='socila-links'>
                    <li><AiFillInstagram className='react-icon'/></li>
                    <li><FaFacebook className='react-icon'/></li>
                    <li><FaTwitter className='react-icon'/></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer