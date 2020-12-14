import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import SectionHeader from './section-header'

const ProjectsPreview = () => {
  const query = graphql`
    query {
      allProjectsYaml(filter: { status: { eq: "preview" } }) {
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
        title="Preview"
        description="These projects have been announced in papers, preprints,
        and/or websites. They require significant work in technical development
        and/or documentation before they will be ready for broad use."
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

export default ProjectsPreview
