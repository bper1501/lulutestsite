import React from 'react'
import '../App.css'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-container">
     
        <div className="footer-wrapper">
          <img src="/logo.png" alt="logo-img" />
          <div className="icons">
          <a href="https://www.facebook.com/Lul%C3%BAslandscaping-109664051179463" target="_blank" rel="noreferrer">
            <i class="fab fa-facebook-square fa-2x "></i>
          </a>
          <i class="fab fa-instagram fa-2x "></i>
          </div>
          <h5>Copyright &copy; 2021 LULU'S Landscaping LLC</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
