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
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const newsTemplate = path.resolve("./src/templates/news.tsx")

  const res = await graphql(`
    query {
      allMarkdownRemark {
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

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: newsTemplate,
      path: `/news/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const moviesTemplate = path.resolve("./src/templates/movies.tsx")

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: moviesTemplate,
      path: `works/movies/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const tvShowsTemplate = path.resolve("./src/templates/tvshows.tsx")

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: tvShowsTemplate,
      path: `works/tvshows/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
