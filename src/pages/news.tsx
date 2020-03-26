import React from "react"
import Layout from "../components/layout"
import newsStyles from "./news.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              briefDescription
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1 className={newsStyles.title}>News</h1>
      <div>
        {data.allMarkdownRemark.edges.map(edges => (
          <div key={edges.node.frontmatter.title}>
            <h1>{edges.node.frontmatter.title}</h1>
            <span>{edges.node.frontmatter.date}</span>
            <p>{edges.node.frontmatter.briefDescription}</p>
            <div>
              <Link to="/">View detail</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default News
