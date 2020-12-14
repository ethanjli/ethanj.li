import React from 'react'
import PropTypes from 'prop-types'
import ReactHTMLParser from 'react-html-parser'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Tags from './tags'
import Comments from './comments'

import style from '../styles/post.module.css'

const Post = ({
  title,
  date,
  coverImage,
  excerpt,
  tags,
  html,
}) => (
  <div className={style.post}>
    <div className={style.postContent}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.meta}>
        <span className={style.date}>{date}</span>
        {excerpt && (<p className={style.excerpt}>{excerpt}</p>)}
      </div>

      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
        />
      )}

      {ReactHTMLParser(html)}
      <div className={style.footer}>
        <hr />
        <p>
          See {tags ? <>more posts about: <Tags tags={tags} /></> :
          <><Link to="/posts">more posts</Link>.</>
          }
        </p>
        <p>
          I appreciate any feedback you have - let's have a conversation{' '}
          <a href="https://scholar.social/@ethanjli">on Mastodon</a> or in the
          comments box below:
        </p>
      </div>
      <Comments />
    </div>
  </div>
)

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Post
