import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../styles/layout.css'

const Layout = ({ breadcrumbs, children, hideLogoText }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
          defaultTheme
          mainMenu {
            title
            path
          }
          showMenuItems
          menuMoreText
        }
      }
    }
  `)
  const {
    title,
    logo,
    logoText,
    defaultTheme,
    mainMenu,
    showMenuItems,
    menuMoreText,
  } = data.site.siteMetadata

  return (
    <div className="container">
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText={logoText}
        hideLogoText={hideLogoText}
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
        breadcrumbs={breadcrumbs}
      />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  children: PropTypes.node.isRequired,
  hideLogoText: Boolean
}

export default Layout
