import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import blogStyles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              published_date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postList =
    data.allMarkdownRemark.edges &&
    data.allMarkdownRemark.edges.map((edge, i) => {
      return (
        <li key={i} className={blogStyles.post}>
          <Link to={`/post/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
          </Link>
          <p>{edge.node.frontmatter.published_date}</p>
        </li>
      )
    })

  return (
    <Layout>
      <h2>Blog</h2>
      <ul className={blogStyles.postList}>{postList}</ul>
    </Layout>
  )
}

export default Blog
