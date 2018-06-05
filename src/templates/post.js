import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  console.log('XXX data', data)
  const { markdownRemark: post } = data
  return (
    <div>
      <h1> {post.frontmatter}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
