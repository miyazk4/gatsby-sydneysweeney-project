import React from "react"
import Layout from "../../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import typesStyles from "./types.module.scss"
import Img from "gatsby-image"
import Head from "../../components/head"

const TvShows = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { in: "Movie" } } }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              year
              briefDescription
              type
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
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
      <Head title="Movies" />
      <div className={typesStyles.wrapper}>
        <div className={typesStyles.typesContainer}>
          {data.allMarkdownRemark.edges.map(edges => (
            <div className={typesStyles.typeBox}>
              <h1 className={typesStyles.title}>
                <Link to={`works/movies/${edges.node.fields.slug}`}>
                  {edges.node.frontmatter.title}
                </Link>
              </h1>
              <div className={typesStyles.showDetails}>
                <div className={typesStyles.yearType}>
                  <span>{edges.node.frontmatter.type} </span>
                  <span>({edges.node.frontmatter.year})</span>
                </div>
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
