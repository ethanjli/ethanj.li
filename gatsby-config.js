const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteUrl: `https://ethanj.li`,
    title: 'ethanj.li',
    description: 'Ethan Li, bioengineer',
    blogUrl: `https://ethanj.li/posts`,
    blogTitle: '(un)yielding foundations',
    blogDescription: (
      'Notes on open-source medical devices, ' +
      '<span class="wrap-together">embedded systems,</span> and ' +
      '<span class="wrap-together">global health equity.</span>'
    ),
    author: 'Ethan Li',
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'ethanj.li',
    defaultTheme: 'light',
    showMenuItems: 3,
    menuMoreText: 'More',
    mainMenu: [
      {
        title: 'Writing',
        path: '/posts',
      },
      {
        title: 'Projects',
        path: '/projects',
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/src/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: true,
              ordered: false,
              fromHeading: 2,
              toHeading: 4,
              className: 'tableOfContents',
            },
          },
          `gatsby-remark-autolink-headers`,
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-figure`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: ``,
              include: ['coverImage'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
              showCaptions: ['title'],
              markdownCaptions: true,
              disableBgImage: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          `gatsby-remark-numbered-footnotes`,
          `gatsby-remark-bibliography`,
          {
            resolve: `gatsby-remark-twemoji-shortcut`,
            options: {
              style: {
                display: 'inline',
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ethan Li`,
        short_name: `ethanjli`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/`,
          `/projects`,
          `/posts`,
          `/posts/*`,
          `/tags`,
          `/tags/*`,
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-draft`,
      options: {
        timezone: 'America/Los_Angeles',
        publishDraft: !isProduction,
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: isProduction ? 'ethanjli' : 'ethanjli-dev',
        allowLocal: !isProduction,
        referrer: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: blogTitle
                description: blogDescription
                siteUrl: blogUrl
                site_url: blogUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => (
              allMarkdownRemark.edges.map(edge => (
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              ))
            ),
            query: `
              {
                allMarkdownRemark(
                  filter: {
                    fields: {
                      type: { eq: "posts" }
                      draft: { eq: false }
                    }
                    frontmatter: { unlisted: { eq: false } }
                  }
                  sort: { fields: [frontmatter___date], order: DESC },
                ) {
                  edges {
                    node {
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        excerpt
                      }
                    }
                  }
                }
              }
            `,
            output: '/posts/rss.xml',
            title: '(un)yielding foundations',
          },
        ],
      },
    },
  ],
}
