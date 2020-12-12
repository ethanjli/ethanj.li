import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Page from '../components/page'

const PageTemplate = ({ data }) => {
  const {
    fields: { slug },
    frontmatter: { title, coverImage, excerpt },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <div className="content">
        <Page
          key={id}
          title={title}
          path={slug}
          coverImage={coverImage}
          html={html}
        />
      </div>
    </Layout>
  )
}

export default PageTemplate

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      frontmatter {
        title
        excerpt
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
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
