import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <p><small>Thanks for visiting us</small></p>
            <br />
          <div className='footer-nav'>
          <a href="/">Terms & Conditions</a>
            <a href="/">Privacy</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
    );
};

export default Footer;