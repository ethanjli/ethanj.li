import React from 'react'
import PropTypes from 'prop-types'

import style from '../styles/project.module.css'

const ProjectPreview = ({
  title,
  subtitle,
  why,
  what,
  role,
  url,
  papers,
  preprints,
  repos,
}) => {
  const links = []
    .concat((papers || []).map(
      ({ journal, date, url: paperUrl }) => <a href={paperUrl}>paper: {journal}, {date}</a>
    ))
    .concat((preprints || []).map(
      ({ server, date, url: preprintUrl }) => <a href={preprintUrl}>preprint: {server}, {date}</a>
    ))
    .concat((repos || []).map(
      ({ name, url: repoUrl }) => <a href={repoUrl}>repo: {name}</a>
    ))
  return (
    <div className={style.project}>
      <div className={style.projectContent}>
        <h1 className={style.title}><a href={url}>{title}</a></h1>
        <div className={style.meta}>
          <p>{subtitle}</p>
          <p>Role: {role}</p>
        </div>
        <p><span className={style.label}>Why:</span> {why}</p>
        <p><span className={style.label}>What:</span> {what}</p>
        <div className={style.meta}>
          {links.length && <p className={style.links}>Links: {links}</p>}
        </div>
      </div>
    </div>
  )
}

ProjectPreview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  why: PropTypes.string,
  what: PropTypes.string,
  role: PropTypes.string,
  url: PropTypes.string,
  papers: PropTypes.arrayOf(PropTypes.object),
  preprints: PropTypes.arrayOf(PropTypes.object),
  repos: PropTypes.arrayOf(PropTypes.object),
}

export default ProjectPreview
