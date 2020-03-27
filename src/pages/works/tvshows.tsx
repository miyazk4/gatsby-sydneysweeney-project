import React from "react"
import Layout from "../../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import typesStyles from "./types.module.scss"
import Img from "gatsby-image"

const TvShows = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { in: "Tv Show" } } }) {
        totalCount
        edges {
          node {
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
    }
  `)

  return (
    <Layout>
      <div className={typesStyles.wrapper}>
        <div className={typesStyles.typesContainer}>
          {data.allMarkdownRemark.edges.map(edges => (
            <div className={typesStyles.typeBox}>
              <h1 className={typesStyles.title}>
                {edges.node.frontmatter.title}
              </h1>
              <div className={typesStyles.showDetails}>
                <div className={typesStyles.yearType}>
                  <span>{edges.node.frontmatter.type} </span>
                  <span>({edges.node.frontmatter.year})</span>
                </div>
                <p className={typesStyles.seasons}>
                  Seasons: {edges.node.frontmatter.seasons}
                </p>
              </div>
              <div className={typesStyles.imageContainer}>
                <Img
                  className={typesStyles.image}
                  fluid={
                    edges.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  alt=""
                />
              </div>
              <p className={typesStyles.information}>
                {edges.node.frontmatter.briefDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default TvShows