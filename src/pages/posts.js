import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-header'
import PostPreview from '../components/post-preview'

const Posts = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
    site: { siteMetadata: { blogTitle, blogDescription } },
  } = data

  return (
    <>
      <Layout breadcrumbs={[{ title: 'writing', path: '/posts' }]}>
        <SEO title={blogTitle} description={blogDescription} />
        <BlogHeader />
        <div className="content">
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
              <PostPreview
                key={id}
                title={title}
                date={date}
                path={slug}
                tags={tags}
                excerpt={excerpt || autoExcerpt}
              />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

Posts.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: {
        type: { eq: "posts" }
        draft: { eq: false }
      } }
      sort: { fields: [frontmatter___date], order: DESC }
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
        blogTitle
        blogDescription
      }
    }
  }
`

export default Posts
