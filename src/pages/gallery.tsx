import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import galleryTypes from "./gallery.module.scss"
import Head from "../components/head"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg|jpeg)/" }
          relativeDirectory: { eq: "images/gallery" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Gallery" />
      <div className={galleryTypes.wrapper}>
        <h1 className={galleryTypes.title}>Gallery</h1>
        <div className={galleryTypes.imageWrapper}>
          {data.allFile.edges.map(edges => (
            <div className={galleryTypes.imageContainer}>
              <Img
                className={galleryTypes.image}
                fluid={edges.node.childImageSharp.fluid}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
