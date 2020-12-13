const { createFilePath } = require('gatsby-source-filesystem')
const { forEach, uniq, filter, not, isNil, flatMap } = require('rambdax')
const path = require('path')
const { toKebabCase } = require('./src/helpers')

const contentTypeRegex = /src\/(.*?)\//
const getType = node => node.fileAbsolutePath.match(contentTypeRegex)[1]

const templates = {
  'pages': path.resolve(`./src/templates/page.js`),
  'posts': path.resolve(`./src/templates/post.js`),
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
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const {
      allMarkdownRemark: { edges: markdownPages },
    } = result.data

    const posts = allNodes.filter(
      ({ internal, fields }) =>
        internal.type === 'MarkdownRemark' &&
        fields.type === 'posts',
    )

    // Create posts index with pagination
    createPage({
      path: '/posts',
      component: templates.postsIndex,
    })

    // Create each markdown page and post
    forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates[node.fields.type],
        context: {
          type: node.fields.type,
        },
      })
    }, markdownPages)

    // Create tag pages
    const tags = filter(
      tag => not(isNil(tag)),
      uniq(flatMap(post => post.frontmatter.tags, posts)),
    )

    forEach(tag => {
      createPage({
        component: templates.tags,
        path: `/tags/${toKebabCase(tag)}`,
        context: { tag },
      })
    }, tags)

    return {
      markdownPages,
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
