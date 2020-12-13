import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-header'
import PostPreview from '../components/post-preview'

import '../styles/layout.css'

const Tag = ({
  data,
  pageContext: { tag },
}) => {
  const {
    allMarkdownRemark: { edges: posts },
    site: { siteMetadata: { blogDescription } },
  } = data

  return (
    <>
      <SEO title={`#${tag}`} description={blogDescription} />
      <Layout breadcrumbs={[{ title: 'writing', path: '/posts' }]}>
        <BlogHeader />
        <div className="content">
          <div className="innerContent">
            <div className="infoBanner">
              Posts with tag: <span>#{tag}</span>
            </div>

            {posts.map(({ node }) => {
              const {
                id,
                excerpt: autoExcerpt,
                fields: { slug },
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
    </>
  )
}

Tag.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
}

export const postsQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        fields: {
          draft: { eq: false }
        }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
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

export default Tag
