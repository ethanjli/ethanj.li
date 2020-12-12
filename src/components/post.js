import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { toKebabCase } from '../helpers'

import style from '../styles/post.module.css'

const Post = ({
  title,
  date,
  path,
  coverImage,
  excerpt,
  tags,
  html,
}) => (
  <div className={style.post}>
    <div className={style.postContent}>
      <h1 className={style.title}>
        {excerpt ? <Link to={path}>{title}</Link> : title}
      </h1>
      <div className={style.meta}>
        {date}
        {tags ? (
          <div className={style.tags}>
            {tags.map(tag => (
              <Link to={`/tags/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
                <span className={style.tag}>#{tag}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>

      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
        />
      )}

      {excerpt ? (
        <p>{excerpt}</p>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
      )}
    </div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Post
