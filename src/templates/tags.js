import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-header'
import Post from '../components/post'

import '../styles/layout.css'

const Tags = ({
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
                coverImage,
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
                coverImage={coverImage}
                excerpt={excerpt || autoExcerpt}
              />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

Tags.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
}

export const postsQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            coverImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

export default Tags
