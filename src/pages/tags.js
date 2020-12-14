import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import { toKebabCase } from '../helpers'

import SEO from '../components/seo'
import Layout from '../components/layout'
import BlogHeader from '../components/blog-header'

import style from '../styles/tags.module.css'

const Tags = ({ data }) => {
  const {
    allMarkdownRemark: { group },
    site: { siteMetadata: { blogTitle, blogDescription } },
  } = data

  return (
    <>
      <Layout breadcrumbs={[{ title: 'writing', path: '/posts' }]}>
        <SEO title={blogTitle} description={blogDescription} />
        <BlogHeader />
        <div className="content">
          <div className="innerContent">
            <h1>All Tags</h1>
            <ul className={style.tagList}>
              {group.map(tag => (
                <li key={toKebabCase(tag.fieldValue)}>
                  <Link className={style.tag} to={`/tags/${toKebabCase(tag.fieldValue)}`}>
                    {tag.fieldValue}
                  </Link> ({tag.totalCount} posts)
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}

Tags.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: {
        type: { eq: "posts" }
        draft: { eq: false }
      } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
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

export default Tags