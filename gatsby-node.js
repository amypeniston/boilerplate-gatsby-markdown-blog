const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions

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
  const postTemplate = path.resolve(`./src/templates/post.js`)

  const response = await graphql(`
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

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
