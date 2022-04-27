import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"

import data from "./myInfo"
import '../scss/common.scss'
import '../scss/work.scss'

const MyWork = () => {
    return (
        <div className="section" id="work">
            <div className="container">
                <div className="work-wrapper">
                    <Fade bottom>
                        <h1>Books I'm currently reading</h1>
                    </Fade>
                    <p>If you have recommendations of any books I should read next, feel free to let me know</p>
                    <div className="grid">
                        <Fade bottom cascade>
                            {data.Books.map((project, index) => (
                                <Card
                                    key={index}
                                    heading={project.title}
                                    paragraph={project.para}
                                    imgUrl={project.imageSrc}
                                    projectLink={project.url}
                                ></Card>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWork