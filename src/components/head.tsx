import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          title
        }
      }
    }
  `)

  return <Helmet title={`${title} | ${data.site.siteMetaData.title}`} />
}

export default Head
