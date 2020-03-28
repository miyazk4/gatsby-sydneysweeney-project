import React from "react"
import Layout from "../components/layout"
import newsStyles from "./news.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Head from "../components/head"

const NewsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/news/" } }) {
        edges {
          node {
            frontmatter {
              title
              date
              briefDescription
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }

            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="News" />
      <div className={newsStyles.wrapper}>
        <h1 className={newsStyles.title}>News</h1>
        <div className={newsStyles.newsContainer}>
          {data.allMarkdownRemark.edges.map(edges => (
            <div
              className={newsStyles.newsBox}
              key={edges.node.frontmatter.title}
            >
              <h2 className={newsStyles.subtitle}>
                <Link to={`news/${edges.node.fields.slug}`}>
                  {edges.node.frontmatter.title}
                </Link>
              </h2>
              <span className={newsStyles.date}>
                {edges.node.frontmatter.date}
              </span>
              <p className={newsStyles.information}>
                {edges.node.frontmatter.briefDescription}
              </p>
              <div className={newsStyles.imageContainer}>
                <Img
                  className={newsStyles.image}
                  fluid={
                    edges.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default NewsPage
