import React from 'react'


function ServiceCard(props) {
  return (
    <>
      <li className="service_card">
        <figure className="pic-container">
          <img src={props.src} alt="img" className="service_card_pic"/>
        </figure>
        <div className="service_card_info">
          <h1 className="service_card_title">{props.title}</h1>
          <h3 className="service_card_text">{props.text}</h3>
        </div>
      </li>
    </>
  )
}

export default ServiceCard
