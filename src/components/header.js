import React from "react"
import Fade from "react-reveal/Fade"
import myInfo from "./myInfo"
import resume from "../images/software_resume.pdf"
import '../scss/header.scss'
import '../scss/common.scss'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {myInfo.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {myInfo.headerTags[0]}
              </h1>
              <h1>
                {" "}
                {myInfo.headerTags[1]}
              </h1>
              <h1>
                {" "}
                {myInfo.headerTags[2]}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{myInfo.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href='https://www.linkedin.com/in/hfathi99/'
              target="_blank"
              type="button"
              className="primary-btn"
            >
              LET'S CONNECT
            </a>
            <a
              href={resume}
              target="_blank"
              type="button"
              className="primary-btn"
            >
              MY RESUME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header