import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

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
    <form ref={form} onSubmit={sendEmail}>
      <div className="input">
        <input type="text" className='#' placeholder='Name' name='name' />
      </div>
      <div className="input">
        <input type="text" className='#' placeholder='Project Description' name='subject' />
      </div>
      <div className="input">
        <input type="text" className='#' placeholder='Phone Number' name='phone' />
      </div>
      <div className="input">
        <input type="text" className='#' placeholder='Email Address' name='email' />
      </div>
      <div className="input">
        <input type="textarea" className='#' placeholder='Message' name='message' />
      </div>
        <input type="submit" />
    </form>
      
    </div>
  )
}

export default Contact
