import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content">
      <div className="innerContent">
        <h1>Not Found</h1>
        <p>
          Oops, you just hit a route that doesn&#39;t exist! It would be very helpful
          to me if you could file a bug report on{' '}
          <a href="https://github.com/ethanjli/ethanj.li/issues">Github Issues</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
