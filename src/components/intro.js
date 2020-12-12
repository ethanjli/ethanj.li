import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import SectionHeader from './section-header'

import style from '../styles/intro.module.css'

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      file (
        relativePath: { eq: "avatar.jpg" },
        sourceInstanceName: { eq: "images" },
      ) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { childImageSharp } = data.file

  return (
    <>
      <SectionHeader>
        <div className={style.intro}>
          <h1>Hello!</h1> <Img fluid={childImageSharp.fluid} className={style.avatar} />
        </div>
        <p>
          I'm Ethan Li, a third-year Bioengineering PhD student in{' '}
          <a href="http://prakashlab.stanford.edu/">Manu Prakash's lab</a> at
          Stanford University. I go by they/them pronouns. In the Prakash Lab,
          I work together with teammates to develop open platforms and tools for
          global health and <a href="https://www.frugalscience.org/">frugal science</a>.
          Much of my work involves designing and building integrated software,
          electronics, and mechanical systems.
        </p>
        <p>
          The working title of my thesis project is{' '}
          <a href={
            'https://docs.google.com/presentation/d/1E1GtcWDWyC21IZbu_' +
            'j8VFsxixaMr911MCLpZsb5zlbU/edit?usp=sharing'}
          >
            Open-source medical devices towards global health equity: invention,
            development, and implementation
          </a>. I'm studying challenges and strategies for how platforms and
          communities might be built to support international cooperative production
          of medical devices appropriate for local settings. There are many
          exciting questions in this area, including sustainability, governance,
          ethics, regulations, and standardization. For my thesis, I'm focusing on
          three key technical and organizational questions for open-source medical devices:
          scalability, clinical efficacy, and safety.
        </p>
        <p>
          If you want to chat about any of these topics, you can find me on Mastodon
          as <a href="https://scholar.social/@ethanjli">@ethanjli@scholar.social</a> or
          on Linkedin as <a href="https://www.linkedin.com/in/ethanjli/">ethanjli</a>.
          If you want to look at my work, you can check out{' '}
          <a href={
            'https://docs.google.com/document/d/108EKsWw4GVyhvMiCY9wna' +
            'VAvcOXCppiHDL8jIVvOtcA/edit?usp=sharing'}
          >
            my CV
          </a> and my <Link to="/projects">Projects page</Link>.
        </p>
      </SectionHeader>
    </>
  )
}

export default Intro
