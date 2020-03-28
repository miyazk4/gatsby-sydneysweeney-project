import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import typeStyles from "./type.module.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        year
        seasons
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const Movies = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={typeStyles.wrapper}>
        <div className={typeStyles.typeContainer}>
          <h1 className={typeStyles.title}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <div className={typeStyles.showDetails}>
            <div className={typeStyles.yearContainer}>
              <span className={typeStyles.year}>
                Year: {props.data.markdownRemark.frontmatter.year}
              </span>
            </div>
            <p className={typeStyles.seasons}>
              Seasons: {props.data.markdownRemark.frontmatter.seasons}
            </p>
          </div>
          <div className={typeStyles.imageContainer}>
            <Img
              className={typeStyles.image}
              fluid={
                props.data.markdownRemark.frontmatter.featuredImage
                  .childImageSharp.fluid
              }
            />
          </div>
          <div
            className={typeStyles.content}
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default Movies
