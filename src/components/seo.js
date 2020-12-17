import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, keywords, title, image }) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    siteUrl,
  } = data.site.siteMetadata
  const metaTitle = title || siteTitle
  const metaDescription = description || siteDescription
  const metaImage = image && image.src ? `${siteUrl}${image.src}` : null
  console.log(image, metaImage)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={title ? `${siteTitle}: ${title}` : siteTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
      ]
        .concat(
          keywords.length > 0 ? {
            name: `keywords`,
            content: keywords.join(`, `),
          } : [],
        )
        .concat(image ? [
          {
            property: `og:image`,
            content: metaImage,
          },
          {
            property: `og:image:width`,
            content: image.width,
          },
          {
            property: `og:image:height`,
            content: image.height,
          },
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
        ] : [
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ])
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    'open-source',
    'open source',
    'medical devices',
    'global health',
    'health equity',
    'health justice',
    'open hardware',
    'open science hardware',
    'frugal science',
    'embedded systems',
    'systems engineering',
    'system architecture',
    'bioengineering',
    'biomedical engineering',
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default SEO
