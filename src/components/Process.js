import React from 'react'
import '../App.css';
import './Process.css'

function Process() {
  return (
    <div>
      <div className="process-container">
        <h1>Our Process Is Simple</h1>
        <h2>What to Expect From Start to Finish</h2>
        <div className="row1">
          <div className="row-item row-item-1"><img src="img/meeting.png" alt="meeting-img" /></div>        
          <div className="row-item row-item-2">
            <h2>Start with a free qoute for your project.</h2>
            <p>Contact us for your free qoute today! We are happy to discuss your ideas. Whether you are sticking to a strict budget or just wondering what that dream yard would cost, We are happy to help with a commitment-free qoute </p>
          </div>        
        </div>
        <div className="row2">  
          <div className="row-item row-item-5">
            <h2>Work closely with us to design your project.</h2>
            <p>Work with our industry experts to design your project down to the smallest detail. Your ideas or ours we promise a beautiful result in the end.</p>
          </div>        
          <div className="row-item row-item-6"><img src="img/blueprint.png" alt="blueprint-img" /></div> 
        </div>
        <div className="row3">        
          <div className="row-item row-item-7"><img src="img/build.png" alt="build-img" /></div>        
          <div className="row-item row-item-8">
            <h2>Let the magic begin!</h2>
            <p>Now that all the details have been discussed and agreed, we take over and get to it! Just sit back and relax as you see all your ideas become reality.</p>
          </div> 
        </div>
        <div className="row4">        
          <div className="row-item row-item-10">
            <h2>Once completed.. count on us to maintain it.</h2>
            <p>A beautiful yard is an invesment and you can 110% count on us to keep it as beautiful as the first day by providing scheduled follow up maintenance.</p>
          </div>        
          <div className="row-item row-item-11"><img src="img/rake.png" alt="rake-img" /></div> 
        </div>
      </div>
    </div>
  )
}

export default Process
