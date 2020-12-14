import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import SectionHeader from '../components/section-header'
import ProjectPreview from '../components/project-preview'

const Projects = ({ data }) => {
  const {
    allProjectsYaml: { edges },
  } = data

  const projectsPreview = edges.filter(({ node }) => node.status === 'preview')
  const projectsPrototype = edges.filter(({ node }) => node.status === 'prototype')

  return (
    <>
      <Layout breadcrumbs={[{ title: 'projects', path: '/projects' }]}>
        <SEO title="Projects" description="Ongoing and past projects." />
        <div className="content">
          <div className="innerContent">
            <SectionHeader
              title="Preview"
              description="These projects have been announced in papers, preprints,
              and/or websites. They require significant work in technical development
              and/or documentation before they will be ready for broad use."
            />
            {projectsPreview.map(({ node }) => {
              const {
                title,
                subtitle,
                description,
                role,
                // repos,
                // preprints,
                // websites,
              } = node

              return (
                <ProjectPreview
                  title={title}
                  subtitle={subtitle}
                  role={role}
                  description={description}
                />
              )
            })}
            <SectionHeader
              title="Prototype"
              description="These projects are proofs-of-concept and require further development
              before they will be ready for reuse."
            />
            {projectsPrototype.map(({ node }) => {
              const {
                title,
                subtitle,
                description,
                role,
                // repos,
                // preprints,
                // websites,
              } = node

              return (
                <ProjectPreview
                  title={title}
                  subtitle={subtitle}
                  role={role}
                  description={description}
                />
              )
            })}
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
    allProjectsYaml {
      edges {
        node {
          title
          subtitle
          description
          status
          role
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
          websites {
            name
            url
          }
        }
      }
    }
  }
`

export default Projects
