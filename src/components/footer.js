import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          All content in this website is licensed under{' '}
          <a href="https://creativecommons.org/licenses/by/4.0/"> CC BY 4.0</a>.
        </span>
        <span className="footerCopyrights">
          <a href="https://github.com/ethanjli/ethanj.li">Custom design</a> derived from{' '}
          <a href="https://github.com/panr/gatsby-starter-hello-friend">
            panr/gatsby-starter-hello-friend
          </a>.
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
