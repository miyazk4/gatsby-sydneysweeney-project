import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
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
          fields {
            slug
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
        <p>
          <Link className={worksStyles.linkTo} to="/works/tvshows">
            Tv Shows
          </Link>
        </p>
        <p>
          <Link className={worksStyles.linkTo} to="/works/movies">
            Movies
          </Link>
        </p>
        <div className={worksStyles.workContainer}>
          {data.allMarkdownRemark.nodes.map(nodes => (
            <div className={worksStyles.worksBox}>
              {nodes.frontmatter.type === "Tv Show" ? (
                <h2 className={worksStyles.subtitle}>
                  <Link to={`works/tvshows/${nodes.fields.slug}`}>
                    {nodes.frontmatter.title}
                  </Link>
                </h2>
              ) : (
                <h2 className={worksStyles.subtitle}>
                  <Link to={`works/movies/${nodes.fields.slug}`}>
                    {nodes.frontmatter.title}
                  </Link>
                </h2>
              )}

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
