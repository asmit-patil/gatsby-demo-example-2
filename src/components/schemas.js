import React from 'react'
import { Link, graphql } from 'gatsby'
import renderHTML from 'react-render-html'

import Layout from './layout'

const BlogPage = ({ data }) => {
  const testData = data.contentstackPluginTest
  console.log(testData,'testdata');
  return (
    <Layout>
      <div className="container">
        <div>
          <section>
            <div className="blog-title">
              <h2>{testData.title}</h2>
            </div>
          </section>
          <h4>This is referenced blog for this page</h4>
          {testData.reference.map(reference => 
            <section>
            <div className="blog-title">
              <h2>{reference.title}</h2>
            </div>
            <div className="blog-description">
              {reference.short_title}
              <Link to={reference.url}>
                <span> Read more </span>
              </Link>
            </div>
          </section>
          ) 
          }
          <br></br>
          <h4>The number field value is : {testData.number ? testData.number : 'null'}</h4>
          <br></br>
          {testData.modular_blocks.length > 0 ?
           <section>
             <h4>These are the modular blocks</h4>
             <div>
             {testData.modular_blocks.map(block => 
             <div>
              {block.first_block ? 
              <div>
                {block.first_block.group ? 
                
                  <section> 
                    <img src={block.first_block.group.file ? block.first_block.group.file.url: ''}
                      alt={block.first_block.group.file ? block.first_block.group.file.title: ''}
                      width="100px" height="100px"/>
                    {/* <div>{block.first_block.group.description}</div> */}
                  </section> 
                : ''}

                {block.first_block.link ? <Link to={block.first_block.link.href}>{block.first_block.link.title}</Link>: ''}
              </div> : ''}
              
                {block.second_block ? 
                  <div> 
                    {block.second_block.modular_blocks.length > 0 ? 
                    <section>
                      {block.second_block.modular_blocks.map((blk) => 
                        blk._2_1 ?
                        <div>
                          <p>{renderHTML(blk._2_1.markdown)}</p>
                          <p>{blk._2_1.multi_line}</p>
                        </div> : ''
                      )}
                    </section>: <h4>Empty molular block within modular block !!!</h4>}
                  </div> : ''}
              </div>
             )}
             </div>
           </section> : <h4>Modular blocks fields are empty !!! </h4>
          
          }
          
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query PluginTestByID($id: String!) {
    contentstackPluginTest(id: { eq: $id }) {
      modular_blocks {
        first_block {
          group {
            file {
              filename
              url
            }
          }
          link {
            href
            title
          }
        }
        second_block {
          modular_blocks {
            _2_1 {
              markdown
              multi_line
            }
          }
        }
      }
      number
      reference {
        title
        short_title
        url
      }
      title
      url
      id
    }
  }
`
