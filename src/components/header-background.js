import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const HeaderBackground = ({ children, backgroundImage }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativePath: { glob: "header-backgrounds/*.jpg" }}) {
          nodes {
            base
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const image = data.allFile.nodes.filter(({ base }) => base === backgroundImage)[0]
  if (image === undefined) {
    return children
  }
  const imageData = image.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className="pageHeaderBackground"
      fluid={imageData}
    >
      {children}
    </BackgroundImage>
  )
}

HeaderBackground.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
}

export default HeaderBackground
