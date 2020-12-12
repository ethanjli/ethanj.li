import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Intro from '../components/intro'
import SectionHeader from '../components/section-header'
import Post from '../components/post'

const numPosts = 3

const Index = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
    site: { siteMetadata: { blogDescription } },
  } = data

  return (
    <>
      <SEO />
      <Layout>
        <Intro />
        <SectionHeader title='Writing' home='/posts'>
          <p>{blogDescription} Here are the {numPosts} most recent posts:</p>
        </SectionHeader>
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

export const postsPreviewQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
    site {
      siteMetadata {
        blogDescription
      }
    }
  }
`

export default Index
