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

  const image = data.allFile.nodes.filter(({ base }) => base === 'blog.jpg')[0]
  const imageData = image.childImageSharp.resize

  return (
    <Layout
      breadcrumbs={[{ title: 'writing', path: '/posts' }]}
      pageHeader={<BlogHeader />}
      backgroundImage="blog.jpg"
    >
      <SEO
        title={blogTitle}
        description={blogDescription}
        image={imageData}
      />
      <div className="content">
        <div className="innerContent">
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
      </div>
    </Layout>
  )
}

Posts.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          type: { eq: "posts" }
          draft: { eq: false }
        }
        frontmatter: { unlisted: { eq: false } }
      }
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
    allFile(filter: {relativePath: {eq: "header-backgrounds/blog.jpg"}}) {
      nodes {
        base
        childImageSharp {
          resize(width: 1200, height: 600, fit: COVER, cropFocus: CENTER) {
            src
            width
            height
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
