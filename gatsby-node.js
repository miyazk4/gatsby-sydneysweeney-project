const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })

    createNodeField({
      node,
      name: "type",
      value: path.basename(path.dirname(node.fileAbsolutePath)),
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsTemplate = path.resolve("./src/templates/news.tsx")

  const resNews = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/news/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resNews.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: newsTemplate,
      path: `/news/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const moviesTemplate = path.resolve("./src/templates/movies.tsx")

  const resMovies = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { in: "Movie" } }
          fileAbsolutePath: { regex: "/works/" }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  resMovies.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: moviesTemplate,
      path: `works/movies/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const resTvShows = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { type: { in: "Tv Show" } }
          fileAbsolutePath: { regex: "/works/" }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const tvShowsTemplate = path.resolve("./src/templates/tvshows.tsx")

  resTvShows.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: tvShowsTemplate,
      path: `works/tvshows/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
