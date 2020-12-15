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
          <h1>Hi!</h1> <Img fluid={childImageSharp.fluid} className={style.avatar} />
        </div>
        <p>
          I'm Ethan Li, a third-year Bioengineering PhD student in{' '}
          <a href="http://prakashlab.stanford.edu/">Manu Prakash's lab</a> at
          Stanford University.  I design and build hardware+software systems
          for global health and <a href="https://www.frugalscience.org/">frugal science</a>.
          I go by they/them <a href="https://www.mypronouns.org/they-them">pronouns</a>.
        </p>
        <p>
          The working title of my thesis project is{' '}
          <a href={
            'https://docs.google.com/presentation/d/1E1GtcWDWyC21IZbu_' +
            'j8VFsxixaMr911MCLpZsb5zlbU/edit?usp=sharing'}
          >
            Open-source medical devices towards global health equity: invention,
            development, and implementation
          </a>. The global medical device industry does not &ndash; and will not &ndash; make
          accessible, affordable, and appropriate technologies at the scales needed by the
          >6 billion people outside wealthy areas of wealthy countries. So I'm studying
          strategies for how platforms and international communities might be built to
          support cooperative development of locally-appropriate medical devices.
          There are many exciting questions in this area, including sustainability, governance,
          ethics, and standardization. For my thesis, I'm focusing on three key
          questions: scalability, clinical efficacy, and safety.
        </p>
        <p>
          If you want to chat about any of these topics, you can find me on Mastodon
          as <a href="https://scholar.social/@ethanjli">@ethanjli@scholar.social</a>, or
          you can email me at <a href="mailto:ethanli@stanford.edu">ethanli@stanford.edu</a>.
          If you want to check out my background or my work, please refer to{' '}
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
