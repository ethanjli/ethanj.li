import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import HeaderBackground from './header-background'

import '../styles/layout.css'

const Layout = ({ breadcrumbs, children, hideLogoText, pageHeader, backgroundImage }) => {
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
    <>
      <div className="layoutContainer">
        <HeaderBackground backgroundImage={backgroundImage}>
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
          {pageHeader}
        </HeaderBackground>
      </div>
      <div className="container">
        {children}
      </div>
      <div className="layoutContainer">
        <Footer />
      </div>
    </>
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
  hideLogoText: PropTypes.bool,
  pageHeader: PropTypes.node,
  backgroundImage: PropTypes.string,
}

export default Layout
