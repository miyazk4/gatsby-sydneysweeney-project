import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import worksStyles from "./works.module.scss"

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
        nodes {
          frontmatter {
            title
            year
            briefDescription
            type
            seasons
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <div className={worksStyles.wrapper}>
        <h1 className={worksStyles.title}>Works</h1>
        <div className={worksStyles.workContainer}>
          {data.allMarkdownRemark.nodes.map(nodes => (
            <div className={worksStyles.worksBox}>
              <h2 className={worksStyles.subtitle}>
                {nodes.frontmatter.title}
              </h2>
              <div className={worksStyles.showDetails}>
                <div className={worksStyles.yearType}>
                  <span>{nodes.frontmatter.type} </span>
                  <span>({nodes.frontmatter.year})</span>
                </div>
                <p className={worksStyles.seasons}>
                  Seasons: {nodes.frontmatter.seasons}
                </p>
              </div>
              <div className={worksStyles.imageContainer}>
                <Img
                  className={worksStyles.image}
                  fluid={nodes.frontmatter.featuredImage.childImageSharp.fluid}
                  alt=""
                />
              </div>
              <p className={worksStyles.information}>
                {nodes.frontmatter.briefDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Works
