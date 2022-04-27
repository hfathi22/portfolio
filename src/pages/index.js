import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import MyWork from "../components/MyWork"
import AboutMe from "../components/AboutMe"
import Books from "../components/Books"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Hussain Fathi" />
    <Header>
    </Header>
    <MyWork>
    </MyWork>
    <AboutMe>
    </AboutMe>
    <Books>
    </Books>
    <Contact>
    </Contact>
  </Layout>

)

export default IndexPage
