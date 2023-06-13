import React from 'react';
import './Footer.css';
import Logo from "../../assets/Logo.svg"
import FooterApp from "../../assets/FooterApp.svg"
import FooterGoogle from "../../assets/FooterGoogle.svg"
import facebook from "../../assets/facebook.svg"
import linkedin from "../../assets/linkedin.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import whatsapp from "../../assets/whatsapp.svg"
import usaidlogo from "../../assets/usaidlogo.svg"

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column" id='left'>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="download">
            <img src={FooterGoogle} alt="" />
            <img src={FooterApp} alt="" />
          </div>
          
        </div>
        <div className="footer-column" >
          <h4 className='footer-heading'>About</h4>
          <ul className="quick-links">
            <li><a href="#">Our Values</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column" >
          <h4 className='footer-heading'>Help & Support</h4>
          <ul className="quick-links">
            <li><a href="#">How To Pay?</a></li>
            <li><a href="#">Contact Support</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="footer-column" >
          <h4 className='footer-heading'>Solutions</h4>
          <ul className="quick-links">
            <li><a href="#">Education</a></li>
            <li><a href="#">E-Commerce</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Logistics</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>
        {/* <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <ul className="quick-links">
              <li><a href="#"><img src={FooterPhone} alt="" />+ 650-534-7772</a></li>
              <li><a href="#"><img src={FooterInstagram} alt="" />its_sugarlicious</a></li>
              <li><a href="#"><img src={FooterTiktok} alt="" />its_sugarlicious</a></li>
            </ul>
            <a href="#"><img src={FooterPhone} alt="" />+ 650-534-7772</a>
            <a href="#"><img src={FooterInstagram} alt="" />its_sugarlicious</a>
            <a href="#"><img src={FooterTiktok} alt="" />its_sugarlicious</a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div className="footer-right-mobile">
            <div className="footerbox"><img className='facebook' src={facebook} alt="" /></div>
            <div className="footerbox"><img src={linkedin} alt="" /></div>
            <div className="footerbox"> <img src={instagram} alt="" /></div>
            <div className="footerbox"><img src={twitter} alt="" /></div>
            <div className="footerbox"><img src={whatsapp} alt="" /></div>            
        </div>
        <div className="footer-left">
        <p className="left-paragraph">(c) Copyright PayPro Private Limited © 2021. All right reserved.</p>
        </div>
        <div className="footer-center">
            <a href="">Terms of Service | </a>
            <a href="">Privacy Policy |</a>
            <img src={usaidlogo} alt="" />
        </div>
        <div className="footer-right">
            <div className="footerbox"><img className='facebook' src={facebook} alt="" /></div>
            <div className="footerbox"><img src={linkedin} alt="" /></div>
            <div className="footerbox"> <img src={instagram} alt="" /></div>
            <div className="footerbox"><img src={twitter} alt="" /></div>
            <div className="footerbox"><img src={whatsapp} alt="" /></div>            
        </div>
      </div>
    </footer>
  );
}

export default Footer;
