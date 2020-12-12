import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { toKebabCase } from '../helpers'

import style from '../styles/post.module.css'

export const Tags = ({ tags }) => (
  tags ? (
    <span className={style.tags}>
      {tags.map(tag => (
        <Link to={`/tags/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
          <span className={style.tag}>#{tag}</span>
        </Link>
      ))}
    </span>
  ) : null
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

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
      { excerpt ? (
        <h1 className={style.title}><Link to={path}>{title}</Link></h1>
      ) : (
        <h1 className={style.title}>{title}</h1>
      )}
      <div className={style.meta}>
        <span className={style.date}>{date}</span> {excerpt ? (
          <Tags tags={tags} />
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
          <div className={style.footer}>
            <p>
              See {tags ? <>more posts about: <Tags tags={tags} /></> :
              <Link to="/posts">more posts</Link>
              }.
            </p>
            <p>
              See this post's{' '}
              <a href={`https://github.com/ethanjli/ethanj.li/commits/master/src${path.replace(/\/$/, '')}.md`}>
                revision history.
              </a>
            </p>
            <p>
              I appreciate any feedback you have - send me a toot{' '}
              <a href="https://scholar.social/@ethanjli">on Mastodon</a>.
            </p>
          </div>
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
