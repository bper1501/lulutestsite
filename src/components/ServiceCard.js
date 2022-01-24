import React from 'react'
import { Link } from 'react-router-dom'


function ServiceCard(props) {
  return (
    <>
    <li className="service_card" >
      <Link to={props.path}>
        <figure className="pic-container">
          <img src={props.src} alt="img" className="service_card_pic"/>
        </figure>
      </Link>
        <div className="service_card_info">
          <h1 className="service_card_title">{props.title}</h1>
          <h3 className="service_card_text">{props.text}</h3>
        </div>

    </li>

    </>
  )
}

export default ServiceCard
