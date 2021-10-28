import React from 'react'
import '../App.css'
// import CardItem from './CardItem'
import './Projects.css'
import { Link } from 'react-router-dom'

function Projects() {

  return (

    <div>
      <div className="project-container">
        <h1>Portfolio</h1>
        <h3>
        Enjoy some of Lulu’s Landscaping previous projects. 
        Use them as inspiration and visualization of the work we offer!
        </h3>
        <Link to="/project1" style={{textDecoration:'none'}}>
        <div className="project1">
            <div className="project1-card">
            <div className="firepit-before">
          </div>
          <div className="title">
            <h1>Bloomington Fire Pit</h1>
          </div>
          <div className="firepit-after">
          </div>
            </div>
        </div>
        </Link>

        <Link to="/project2" style={{textDecoration:'none'}}> 
        <div className="project2" >
          <div className="project2-card">
            <div className="yard-img"></div>  
            <div className="title-card">
              <h1>Bloomington Yard</h1>
            </div>      
          </div>
        </div>
        </Link>
  


        <div className="project3">
          <div className="e-card-container">
          <Link to="/project3" style={{textDecoration:'none'}}>
          <div className="e-card">
            <div className="e-card-image"></div>
            <div className="e-card-content"><h2>Edina</h2></div>
          </div>
          </Link>

          <Link to="/project4" style={{textDecoration:'none'}}>
          <div className="e-card">
            <div className="e-card-image"></div>
            <div className="e-card-content"><h2>Edina</h2></div>
          </div>
          </Link>

          <Link to="/project5" style={{textDecoration:'none'}}>
          <div className="e-card">
            <div className="e-card-image"></div>
            <div className="e-card-content"><h2>Edina</h2></div>
          </div>
          </Link>
          </div>
        </div>
 

      </div>
    </div>
  )
}

export default Projects
