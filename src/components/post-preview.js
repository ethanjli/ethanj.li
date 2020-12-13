import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Tags from './tags'

import style from '../styles/post.module.css'

const PostPreview = ({
  title,
  date,
  path,
  coverImage,
  excerpt,
  tags,
}) => (
  <div className={style.post}>
    <div className={style.postContent}>
      {excerpt && <h1 className={style.title}><Link to={path}>{title}</Link></h1>}
      <div className={style.meta}>
        <span className={style.date}>{date}</span> <Tags tags={tags} />
        {excerpt && (<p className={style.excerpt}>{excerpt}</p>)}
      </div>

      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
        />
      )}

    </div>
  </div>
)

PostPreview.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PostPreview
