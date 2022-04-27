import React from "react"
import '../scss/common.scss'
import '../scss/card.scss'

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  var button = null;
  if (projectLink.length > 0) {
    button = <a
      href={projectLink ? projectLink : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      Explore
    </a>
  }

  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        {button}
      </div>
    </div>
  )
}

export default Card