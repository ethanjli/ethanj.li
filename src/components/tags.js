import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { toKebabCase } from '../helpers'

import style from '../styles/tags.module.css'

const Tags = ({ tags }) => (
  tags ? (
    <span className={style.tags}>
      {tags.map(tag => (
        <>
          {' '}
          <Link to={`/tags/${toKebabCase(tag)}`} key={toKebabCase(tag)}>
            <span className={style.tag}>#{tag}</span>
          </Link>
        </>
      ))}
    </span>
  ) : null
)

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default Tags
