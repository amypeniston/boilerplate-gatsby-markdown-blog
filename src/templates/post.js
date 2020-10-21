import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        published_date
      }
      html
    }
  }
`

const blog = props => {
  return (
    <Layout>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>Date Posted: {props.data.markdownRemark.frontmatter.published_date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default blog
