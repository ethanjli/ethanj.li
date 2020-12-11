import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Page from '../components/page'

const PageTemplate = ({ data }) => {
  const {
    frontmatter: { title, date, path, coverImage, excerpt },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      <Page
        key={id}
        title={title}
        date={date}
        path={path}
        coverImage={coverImage}
        html={html}
      />
    </Layout>
  )
}

export default PageTemplate

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    next: PropTypes.object,
    previous: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        path
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
