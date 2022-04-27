import React, {useRef, useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import "./Contact.css";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();
  const initialValues = { sender: "",subject: "",phone: "",email: "",message: "",};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
    console.log(formValues);
  }

  useEffect(() => {
    console.log(`useEffect formErrors`, formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);


      emailjs.sendForm('Lulus Landscaping', 'template_rc2h4zd', form.current, 'user_zePXjS2YnTvLAAXjEbS0G')
      .then((result) => {
          console.log(result.text);
          setFormValues(initialValues);// Clears form after submission
          const message = "Email sent successfully. We will contact you soon!"
          toast(message,{
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE.SUCCESS,

          });
        }, (error) => {
          console.log(error.text);
      }); //sends email if condition is met 
        
      


      
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.sender){
      errors.sender = "Name is required!";
    }
    if(!values.subject){
      errors.subject = "Project Description is required!";
    }
    if(!values.phone){
      errors.phone = "Phone Number is required!";
    } else if (!values.phone.length < 10){
      errors.phone = "please enter 10 digit phone number including area code"
    }
    if(!values.email){
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)){
      errors.email = "This is not a valid email";
    }
    if(!values.message){
      errors.message = "Message is required!";
    }
    return errors;

  }


  function sendEmail(e){
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    
  }
  
  return (
    
    <div>
    <ToastContainer/>
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
        <input 
        type="text" 
        className='input-field' 
        placeholder='Name' 
        name='sender' 
        value={formValues.sender}
        onChange = {handleChange}
        />
      </div>
      <p className='error'>{formErrors.sender}</p>
      <div className="input">
        <input 
        type="text" 
        className='input-field' placeholder='Project Description' name='subject' 
        value={formValues.subject}
        onChange = {handleChange}
        />
      </div>
      <p className='error'>{formErrors.subject}</p>
      <div className="input">
        <input 
        type='text'
        className='input-field' 
        placeholder='Phone Number' 
        name='phone' 
        value={formValues.phone}
        onChange = {handleChange}
        />
      </div>
      <p className='error'>{formErrors.phone}</p>
      <div className="input">
        <input 
        type='email' 
        className='input-field' 
        placeholder='Email Address' 
        name='email' 
        value={formValues.email}
        onChange = {handleChange}
        />
      </div>
      <p className='error'>{formErrors.email}</p>
      <div className="input">
        <textarea name="message" placeholder='Message' value={formValues.message} onChange = {handleChange}></textarea>
      </div>
      <p className='error'>{formErrors.message}</p>
      <div className="input">
        <input type="submit" className='btn'/>
      </div>
    </form>
    </div>
      
    </div>

  )
}

export default Contact
