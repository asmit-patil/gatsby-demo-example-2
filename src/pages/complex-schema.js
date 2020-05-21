import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const blogs = data.allContentstackPluginTest.edges
  return (
    <Layout>
      <div className="container">
        {blogs.map(edge => {
          return (
            <div key={edge.node.id} className="blogs">
              <section>
                <div className="blog-title">
                  <h2> <Link to={edge.node.url}>{edge.node.title}</Link></h2>
                </div>
              </section>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query ComplexSchemaQuery {
    allContentstackPluginTest(
      limit: 1000
      sort: { order: ASC, fields: [created_at] }
    ) {
      edges {
        node {
          id
          url
          title
        }
      }
    }
  }
`
