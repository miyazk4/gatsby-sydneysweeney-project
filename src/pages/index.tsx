import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import homeStyles from "./index.module.scss"
import Head from "../components/head"

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "images/banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />
      <BackgroundImage
        fluid={data.indexImage.childImageSharp.fluid}
        className={homeStyles.backgroundContainer}
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
