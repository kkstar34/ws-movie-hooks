import React from 'react'

function Card(props) {
  return (
    <div className="card" >
        <iframe width="100%" height="300" src={props.film.link} title={props.film.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        <h3>{props.film.title}</h3> 
    </div>
  )
}

export default Card