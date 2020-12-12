import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import PageHeader from './page-header'

import '../styles/layout.css'

const BlogHeader = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          blogTitle
          blogDescription
        }
      }
    }
  `)
  const {
    blogTitle,
    blogDescription,
  } = data.site.siteMetadata

  return (
    <PageHeader
      title={blogTitle}
      description={blogDescription}
      home='/posts'
    >
      {children}
    </PageHeader>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node,
}

export default BlogHeader
