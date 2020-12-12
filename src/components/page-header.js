import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from '../styles/page-header.module.css'

const PageHeader = props => {
  const { title, description, home, image, children } = props

  return (
    <div className={style.header}>
      {image}
      {title && (
        <h1>
          {home ? <Link to={home}>{title}</Link> : title}
        </h1>
      )}
      {description && <p className={style.description}>{description}</p>}
      {children}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  home: PropTypes.string,
  image: PropTypes.node,
  children: PropTypes.node,
}

export default PageHeader
