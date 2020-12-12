import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import style from '../styles/page-header.module.css'

const PageHeader = props => {
  const { title, description, home, children } = props

  return (
    <div className={style.header}>
      <h1><Link to={home}>{title}</Link></h1>
      <p className={style.description}>{description}</p>
      {children}
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  home: PropTypes.string,
  children: PropTypes.node,
}

export default PageHeader
