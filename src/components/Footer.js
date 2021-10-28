import React from 'react'
import '../App.css'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-container">
     
        <div className="footer-wrapper">
          <img src="logo.png" alt="logo-img" />
          <h3>4321 Minnesota Ave S Richfield, MN 55555</h3>
          <div className="icons">
          <i class="fab fa-facebook-square fa-2x "></i>
          <i class="fab fa-instagram fa-2x "></i>
          </div>
          <h5>Copyright &copy; 2021 LULU'S Landscaping LLC</h5>
        </div>
      </div>
    </div>
  )
}

export default Footer
