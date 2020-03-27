import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"
import layoutStyles from "../components/layout.module.scss"
import homeStyles from "./index.module.scss"
import data from "./works"

console.log(data)

const Homepage = props => {
  return (
    <Layout>
      <BackgroundImage
        className={homeStyles.backgroundContainer}
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className={homeStyles.blackOverlay}>
          <div className={homeStyles.contentBox}>
            <h1 className={homeStyles.title}>
              The not-so-offical Sydney Sweeney site.
            </h1>
            <p className={homeStyles.information}>
              © Copyright all rights reserved, Joana Santos 2020
            </p>
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  )
}

export default Homepage
export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
