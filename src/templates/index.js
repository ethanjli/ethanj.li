import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Post from '../components/post'

const Index = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        {posts.map(({ node }) => {
          const {
            id,
            excerpt: autoExcerpt,
            fields: {
              slug,
            },
            frontmatter: {
              title,
              date,
              excerpt,
              tags,
            },
          } = node

          return (
            <Post
              key={id}
              title={title}
              date={date}
              path={slug}
              tags={tags}
              excerpt={excerpt || autoExcerpt}
            />
          )
        })}
      </Layout>
    </>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query($indexPosts: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $indexPosts
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            type
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default Index
