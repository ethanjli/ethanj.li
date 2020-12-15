import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import ProjectsSection from '../components/projects-section'

const Projects = ({ data }) => {
  const {
    allProjectsYaml: { edges },
  } = data

  return (
    <>
      <Layout breadcrumbs={[{ title: 'projects', path: '/projects' }]}>
        <SEO title="Projects" description="Ongoing and past projects." />
        <div className="content">
          <div className="innerContent">
            <ProjectsSection
              title="Preview"
              description="These projects have been announced in papers, preprints,
              and/or websites. They require significant work in technical development
              and/or documentation before they will be ready for broad use."
              status="preview"
              edges={edges}
            />
            <ProjectsSection
              title="Prototype"
              description="These projects are proofs-of-concept and require further development
              before they will be ready for reuse."
              status="prototype"
              edges={edges}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

Projects.propTypes = {
  data: PropTypes.object.isRequired,
}

export const postsQuery = graphql`
  query {
    allProjectsYaml(sort: {
      fields: [priority],
      order: [DESC]
    }) {
      edges {
        node {
          title
          subtitle
          why
          what
          status
          role
          url
          repos {
            name
            url
          }
          preprints {
            description
            server
            date
            url
          }
          papers {
            description
            journal
            date
            url
          }
        }
      }
    }
  }
`

export default Projects
