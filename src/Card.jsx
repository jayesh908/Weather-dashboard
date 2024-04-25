import React from 'react'

const Card = ({ title, subtitle, text }) => {
  return (
    <div className="card shadow-lg" style={{ height: "10rem",backgroundColor:"lightsteelblue" }}>
      <div className="card-body text-start">
        <h2 className="card-title text-body-secondary">{title}</h2>
        <h2 className="card-subtitle mb-2 ">{subtitle}</h2>
        <h2 className="card-subtitle mb-2 ">{}</h2>
        <h5  className="card-text my-2 ">{text}</h5>
      </div>
    </div>
  )
}

export default Card
