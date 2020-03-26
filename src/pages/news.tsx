import React from "react"
import Layout from "../components/layout"
import newsStyles from "./news.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const NewsPage = () => {
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
      <h1 className={newsStyles.title}>News</h1>
      <div>
        {data.allMarkdownRemark.edges.map(edges => (
          <Link to={`news/${edges.node.fields.slug}`}>
            <div key={edges.node.frontmatter.title}>
              <h1>{edges.node.frontmatter.title}</h1>
              <span>{edges.node.frontmatter.date}</span>
              <p>{edges.node.frontmatter.briefDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default NewsPage
