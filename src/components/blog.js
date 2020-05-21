import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from './layout'

const BlogPage = ({ data }) => {
  const blog = data.contentstackBlogs
  return (
    <Layout>
      <div className="container">
        <div>
          <section>
            <div className="blog-title">
              <h2>{blog.title}</h2>
            </div>
            <div className="blog-description">
              {renderHTML(blog.description)}
            </div>
            <div className="author">
              By: {blog.authors.map(author => {
                return <ul>
                          <li><span key={author.id}>{author.name}</span></li>
                          <li><img src={author.author_image ? author.author_image.url: ''}
                            alt={author.author_image ? author.author_image.title: ''}
                            width="100px" height="100px"/>
                          </li>
                        </ul>
              })}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    contentstackBlogs(id: { eq: $id }) {
      title
      id
      url
      description
      authors {
        id
        name
        author_image {
          filename
          url
        }
      }
    }
  }
`
