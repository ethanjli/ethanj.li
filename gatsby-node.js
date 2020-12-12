const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')
const { forEach, uniq, filter, not, isNil, flatMap } = require('rambdax')
const path = require('path')
const { toKebabCase } = require('./src/helpers')

const contentTypeRegex = /src\/(.*?)\//
const getType = node => node.fileAbsolutePath.match(contentTypeRegex)[1]

const templates = {
  'pages': path.resolve(`./src/templates/page.js`),
  'posts': path.resolve(`./src/templates/post.js`),
  'index': path.resolve(`./src/templates/index.js`),
  'postsIndex': path.resolve(`./src/templates/posts/index.js`),
  'tags': path.resolve(`./src/templates/tags.js`),
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const type = getType(node)
    const prefix = type === 'pages' ? '' : `/${type}`
    const slug = prefix + createFilePath({ node, getNode, basePath: '' })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `type`,
      value: type,
    })
  }
}

exports.createPages = ({ actions, graphql, getNodes }) => {
  const { createPage } = actions
  const allNodes = getNodes()

  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              type
            }
            frontmatter {
              title
              tags
            }
            fileAbsolutePath
          }
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const {
      allMarkdownRemark: { edges: markdownPages },
      site: { siteMetadata },
    } = result.data

    const sortedPages = markdownPages.sort((pageA, pageB) => {
      const typeA = pageA.node.fields.type
      const typeB = pageB.node.fields.type

      return (typeA > typeB) - (typeA < typeB)
    })

    const posts = allNodes.filter(
      ({ internal, fields }) =>
        internal.type === 'MarkdownRemark' &&
        fields.type === 'posts',
    )

    // Create homepage
    paginate({
      createPage,
      items: posts,
      component: templates.index,
      itemsPerPage: siteMetadata.postsPerPage,
      pathPrefix: '/',
    })

    // Create posts index with pagination
    paginate({
      createPage,
      items: posts,
      component: templates.postsIndex,
      itemsPerPage: siteMetadata.postsPerPage,
      pathPrefix: '/posts',
    })

    // Create each markdown page and post
    forEach(({ node }, index) => {
      const previous = index === 0 ? null : sortedPages[index - 1].node
      const next =
        index === sortedPages.length - 1 ? null : sortedPages[index + 1].node
      const isNextSameType = node.fields.type === (next && next.fields.type)
      const isPreviousSameType =
        node.fields.type === (previous && previous.fields.type)

      createPage({
        path: node.fields.slug,
        component: templates[node.fields.type],
        context: {
          type: node.fields.type,
          next: isNextSameType ? next : null,
          previous: isPreviousSameType ? previous : null,
        },
      })
    }, sortedPages)

    // Create tag pages
    const tags = filter(
      tag => not(isNil(tag)),
      uniq(flatMap(post => post.frontmatter.tags, posts)),
    )

    forEach(tag => {
      const postsWithTag = posts.filter(
        post =>
          post.frontmatter.tags && post.frontmatter.tags.indexOf(tag) !== -1,
      )

      paginate({
        createPage,
        items: postsWithTag,
        component: templates.tags,
        itemsPerPage: siteMetadata.postsPerPage,
        pathPrefix: `/tags/${toKebabCase(tag)}`,
        context: {
          tag,
        },
      })
    }, tags)

    return {
      sortedPages,
      tags,
    }
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      date: Date! @dateformat
      tags: [String!]
      excerpt: String
      coverImage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}
