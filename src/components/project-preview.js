import React from 'react'
import PropTypes from 'prop-types'

const ProjectPreview = ({ title, subtitle, description, role }) => (
  <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>Role: {role}</p>
    <p>{description}</p>
  </>
)

ProjectPreview.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
}

export default ProjectPreview
