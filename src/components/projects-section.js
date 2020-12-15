import React from 'react'
import PropTypes from 'prop-types'

import SectionHeader from './section-header'
import ProjectPreview from './project-preview'

const ProjectsSection = ({ title, description, status, edges }) => {
  const projects = edges.filter(({ node }) => node.status === status)

  return (
    <>
      <SectionHeader title={title} description={description} />
      {projects.map(({ node }) => {
        const {
          title: projectTitle,
          subtitle,
          why,
          what,
          role,
          url,
          papers,
          preprints,
          repos,
        } = node

        return (
          <ProjectPreview
            title={projectTitle}
            subtitle={subtitle}
            why={why}
            what={what}
            role={role}
            url={url}
            papers={papers}
            preprints={preprints}
            repos={repos}
          />
        )
      })}
    </>
  )
}

ProjectsSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
  edges: PropTypes.arrayOf(PropTypes.object),
}

export default ProjectsSection
