import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.en'
import { procesarCuerpo } from '../utils';
import Markdown from 'markdown-to-jsx'

const ProyectoTemplate = ({ data, location }) => {
    const proyecto = data.strapiProyecto
    const cuerpoProcesado = procesarCuerpo(proyecto.cuerpoen, proyecto.media)
    return (
        <Layout location={location}><>
            <SEO title={`Al Hill - ${proyecto.titulo}`} />
            <div class="container">
                <Link to="/proyectos"><p>&lt;- Volver al índice</p></Link>
                <h1>{ proyecto.tituloen }</h1>
                <Markdown className="cuerpo">{ cuerpoProcesado }</Markdown>
            </div>
        </></Layout>
    )
}

export default ProyectoTemplate

export const query = graphql`
    query ProyectoENTemplate($id: String!) {
        strapiProyecto(id: { eq: $id }) {
            id
            tituloen
            cuerpoen
            media{
                publicURL
            }
        }
    }
` 