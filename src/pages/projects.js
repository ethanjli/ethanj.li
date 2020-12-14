import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ProjectsPreview from '../components/projects-preview'
import ProjectsPrototype from '../components/projects-prototype'

const Projects = () => (
  <Layout breadcrumbs={[{ title: 'projects', path: '/projects' }]}>
    <SEO title="Projects" description="Ongoing and past projects." />
    <div className="content">
      <div className="innerContent">
        <ProjectsPreview />
        <ProjectsPrototype />
      </div>
    </div>
  </Layout>
)

export default Projects
