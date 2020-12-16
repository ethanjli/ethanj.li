import React from 'react'
import PropTypes from 'prop-types'
import ReactHTMLParser from 'react-html-parser'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Intro from '../components/intro'
import SectionHeader from '../components/section-header'
import PostPreview from '../components/post-preview'

const maxNumPosts = 3

const Index = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
    site: { siteMetadata: { blogDescription } },
  } = data
  const numPosts = Math.min(maxNumPosts, posts.length)

  return (
    <>
      <SEO />
      <Layout>
        <div className="content">
          <div className="innerContent">
            <Intro />
            <SectionHeader title='Writing' home='/posts'>
              <p>
                {blogDescription && ReactHTMLParser(blogDescription)}{' '}
                <span className="wrap-together">
                  {
                    numPosts > 1 ?
                    `Here are the ${numPosts} most recent posts:` :
                    (
                      numPosts > 0 ? `Here is the first and only post so far:` :
                      `No posts have been published yet.`
                    )
                  }
                </span>
              </p>
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

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsPreviewQuery = graphql`
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
