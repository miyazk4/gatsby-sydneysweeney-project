import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import newStyles from "./new.module.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { type: { eq: "news" }, slug: { eq: $slug } }) {
      frontmatter {
        title
        date
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

const News = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={newStyles.wrapper}>
        <div className={newStyles.newContainer}>
          <h1 className={newStyles.title}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <p className={newStyles.date}>
            {props.data.markdownRemark.frontmatter.date}
          </p>
          <div className={newStyles.imageContainer}>
            <Img
              className={newStyles.image}
              fluid={
                props.data.markdownRemark.frontmatter.featuredImage
                  .childImageSharp.fluid
              }
            />
          </div>
          <div
            className={newStyles.content}
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default News
