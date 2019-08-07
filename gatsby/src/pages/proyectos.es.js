import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.es'

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
        <h1>Proyectos</h1>

        <div className="filtroWrapper">
          <span className={`filtroBtn ${ this.state.filtro === undefined ? "selected" : ""}`} onClick={() => this.filtrarProyectos(undefined)}>Todos</span>
          <span className={`filtroBtn ${ this.state.filtro === "web" ? "selected" : ""}`} onClick={() => this.filtrarProyectos("web")}>Web</span>
          <span className={`filtroBtn ${ this.state.filtro === "sonido" ? "selected" : ""}`} onClick={() => this.filtrarProyectos("sonido")}>Sonido</span>
        </div>

        <div className="projectWrapper">
          {
            this.props.data.allStrapiProyecto.edges.map(({ node }) => {
              return (
                <Link key={node.id} to={"/proyecto/" + node.id } className={`projectBox ${( node.categorias.includes(this.state.filtro) || this.state.filtro === undefined ) ? "" : "filtrada"}`}>
                  <img src={node.thumbnail.publicURL} />
                  <div className="projectTitle">
                    <p>{node.titulo}</p>
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
  query ProyectosESQuery {
    allStrapiProyecto {
      edges {
        node {
          id
          titulo
          cuerpo
          categorias
          thumbnail{
            publicURL
          }
        }
      }
    }
  }
`