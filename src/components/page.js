import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import style from '../styles/page.module.css'

const Page = ({
  title,
  path,
  coverImage,
  excerpt,
  html,
}) => (
  <div className={style.page}>
    <div className={style.pageContent}>
      <h1 className={style.title}>
        {excerpt ? <Link to={path}>{title}</Link> : title}
      </h1>

      {coverImage && (
        <Img
          fluid={coverImage.childImageSharp.fluid}
          className={style.coverImage}
        />
      )}

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
)

Page.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  coverImage: PropTypes.object,
  excerpt: PropTypes.string,
  html: PropTypes.string,
}

export default Page
