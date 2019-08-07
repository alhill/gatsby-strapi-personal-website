import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.en'

class ProyectosPage extends Component{

  state = {
    filtro: undefined,
  }

  filtrarProyectos = filtro => {
    this.setState({ filtro })
  }

  render(){
    return (
      <Layout location={this.props.location}><>
        <SEO title="Al Hill - Proyectos" />
        <h1>Projects</h1>

        <div className="filtroWrapper">
          <span className={`filtroBtn ${ this.state.filtro === undefined ? "selected" : ""}`} onClick={() => this.filtrarProyectos(undefined)}>All</span>
          <span className={`filtroBtn ${ this.state.filtro === "web" ? "selected" : ""}`} onClick={() => this.filtrarProyectos("web")}>Web</span>
          <span className={`filtroBtn ${ this.state.filtro === "sonido" ? "selected" : ""}`} onClick={() => this.filtrarProyectos("sonido")}>Audio</span>
        </div>

        <div className="projectWrapper">
          {
            this.props.data.allStrapiProyecto.edges.map(({ node }) => {
              return (
                <Link key={node.id} to={"/en/project/" + node.id } className={`projectBox ${( node.categorias.includes(this.state.filtro) || this.state.filtro === undefined ) ? "" : "filtrada"}`}>
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
    )
  }
}
export default ProyectosPage

export const pageQuery = graphql`  
  query ProyectosENQuery {
    allStrapiProyecto {
      edges {
        node {
          id
          tituloen
          cuerpoen
          categorias
          thumbnail{
            publicURL
          }
        }
      }
    }
  }
`