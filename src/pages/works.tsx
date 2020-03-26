import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Works = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/works/" } }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <h1>Works</h1>
      <div>
        {data.allMarkdownRemark.nodes.map(nodes => (
          <div>{nodes.frontmatter.title}</div>
        ))}
      </div>
    </Layout>
  )
}

export default Works
