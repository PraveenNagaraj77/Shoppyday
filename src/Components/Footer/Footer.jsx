import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkedln_icon from '../Assets/pintester_icon.png'
import github_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src= {footer_logo} alt="" />
            <p>Shoppyday</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={linkedln_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={github_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - Designed by Praveen Nagaraj</p>
        </div>
    </div>
  )
}

export default Footer