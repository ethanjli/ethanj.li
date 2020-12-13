import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
    >
      <p>
        You can browse posts by <Link to="/tags">tag</Link> and subscribe via{' '}
        <Link to='/posts/rss.xml'>RSS/Atom</Link>.
      </p>
      {children}
    </PageHeader>
  )
}

BlogHeader.propTypes = {
  children: PropTypes.node,
}

export default BlogHeader
