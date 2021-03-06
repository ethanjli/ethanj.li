import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-header'
import Post from '../components/post'

const BlogPostTemplate = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, date, coverImage, excerpt, tags },
      excerpt: autoExcerpt,
      id,
      html,
    },
  } = data

  return (
    <Layout
      breadcrumbs={[{ title: 'writing', path: '/posts' }]}
      pageHeader={<BlogHeader />}
      backgroundImage="blog.jpg"
    >
      <SEO
        title={title}
        description={excerpt || autoExcerpt}
        image={coverImage ? coverImage.childImageSharp.resize : null}
      />
      <div className="content">
        <div className="innerContent">
          <Post
            key={id}
            title={title}
            date={date}
            excerpt={excerpt}
            coverImage={coverImage}
            html={html}
            tags={tags}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
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
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      id
      html
      excerpt
    }
  }
`
