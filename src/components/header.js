import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Menu from './menu'

import style from '../styles/header.module.css'

const Header = props => {
  const {
    siteLogo,
    logoText,
    hideLogoText,
    mainMenu,
    mainMenuItems,
    menuMoreText,
    defaultTheme,
    breadcrumbs,
  } = props
  const defaultThemeState =
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) ||
    null
  const [userTheme, changeTheme] = useState(defaultThemeState)
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false)
  const [isSubMenuVisible, toggleSubMenu] = useState(false)
  const onChangeTheme = () => {
    const opositeTheme =
      (userTheme || defaultTheme) === 'light' ? 'dark' : 'light'

    changeTheme(opositeTheme)

    typeof window !== 'undefined' &&
      window.localStorage.setItem('theme', opositeTheme)
  }
  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible)
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible)

  return (
    <>
      <Helmet>
        <body
          className={
            (userTheme || defaultTheme) === 'light' ? 'light-theme' : 'dark-theme'
          }
        />
      </Helmet>
      <header className={style.header}>
        <div className={style.inner}>
          <div className={style.logo}>
            <Link to="/">
              {siteLogo.src ? (
                <img src={siteLogo.src} alt={siteLogo.alt} />
              ) : (
                <>
                  <span className={style.mark}>&#9679;</span>{' '}
                  {hideLogoText ? null : <span className={style.text}>{logoText}</span>}
                </>
              )}
            </Link>
            {breadcrumbs && breadcrumbs.map(({ title, path }) => (
              <Link className={style.breadcrumb} to={path}>
                {' '}<span className={style.mark}>&#187;</span>
                {' '}<span className={style.text}>{title}</span>
              </Link>
            ))}
          </div>
          <span className={style.right}>
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={mainMenuItems}
              isMobileMenuVisible={isMobileMenuVisible}
              isSubMenuVisible={isSubMenuVisible}
              menuMoreText={menuMoreText}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
            />
          </span>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteLogo: PropTypes.object,
  logoText: PropTypes.string,
  hideLogoText: PropTypes.bool,
  defaultTheme: PropTypes.string,
  mainMenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ),
  mainMenuItems: PropTypes.number,
  menuMoreText: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Header
