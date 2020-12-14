import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SectionHeader from './section-header'

const ProjectsPrototype = () => {
  const query = graphql`
    query {
      allProjectsYaml(filter: { status: { eq: "prototype" } }) {
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
  const data = useStaticQuery(query)

  const {
    allProjectsYaml: { edges: projects },
  } = data

  return (
    <>
      <SectionHeader
        title="Prototype"
        description="These projects are proofs-of-concept and require further
        development before they will be ready for reuse."
      />
      {projects.map(({ node }) => {
        const {
          title,
          // subtitle,
          // description,
          // status,
          // role,
          // repos,
          // preprints,
          // websites,
        } = node

        return (
          <h2>{title}</h2>
        )
      })}
    </>
  )
}

export default ProjectsPrototype
