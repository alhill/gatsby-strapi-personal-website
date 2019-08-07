import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.en'

const BlogPage = ({ data, location }) => 
        <Layout location={location}><>
          <SEO title="Al Hill - Blog" />
          <h1>Blog</h1>
          <div className="projectWrapper">
            {
              data.allStrapiEntrada.edges.map(({ node }) => {
                return (
                  <Link key={node.id} to={"/blog/" + node.id } className={`projectBox`}>
                    <img src={node.thumbnail.publicURL} />
                    <div className="projectTitle">
                      <p>{node.tituloen}</p>
                    </div>
                  </Link>
                )
              })        
            }
          </div>
      </></Layout>
export default BlogPage

export const pageQuery = graphql`  
  query IndexENQuery {
    allStrapiEntrada {
      edges {
        node {
          id
          created_at
          tituloen
          cuerpoen
          thumbnail{
            publicURL
          }
        }
      }
    }
  }
`
