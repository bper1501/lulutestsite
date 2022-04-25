import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import "./Contact.css";


function Contact() {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('Lulus Landscaping', 'template_rc2h4zd', form.current, 'user_zePXjS2YnTvLAAXjEbS0G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
  return (
    <div>
    <h1>Contact Us</h1>
    <div className="contact-header">
          <div className="message">
            <h3>Reach out to us using the form or emailing us directly. 
            We look forward to dicussing your landscape project. </h3>
          </div>
          <div className="info">
            <h3>Phone Number: 612.735.4432 <br /> Email: info@luluslandscape.com</h3>
          </div>
    </div> 

    <div className="form-contain">
    <form ref={form} onSubmit={sendEmail} className='form'>
      <div className="input">
        <input type="text" className='input-field' placeholder='Name' name='name' />
      </div>
      <div className="input">
        <input type="text" className='input-field' placeholder='Project Description' name='subject' />
      </div>
      <div className="input">
        <input type="text" className='input-field' placeholder='Phone Number' name='phone' />
      </div>
      <div className="input">
        <input type="text" className='input-field' placeholder='Email Address' name='email' />
      </div>
      <div className="input">
        {/* <input type="textarea" className='textarea ' placeholder='Message' name='message' /> */}
        <textarea name="message" placeholder='Message'></textarea>
      </div>
      <div className="input">
        <input type="submit" className='btn'/>
      </div>
    </form>
    </div>
      
    </div>

  )
}

export default Contact
