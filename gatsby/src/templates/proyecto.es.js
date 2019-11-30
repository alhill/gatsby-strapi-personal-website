import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.es'
import { procesarCuerpo } from '../utils';
import Markdown from 'markdown-to-jsx'

const ProyectoTemplate = ({ data, location }) => {
    const proyecto = data.strapiProyecto
    const cuerpoProcesado = procesarCuerpo(proyecto.cuerpo, proyecto.media)
    return (
        <Layout location={location}><>
            <SEO title={`Al Hill - ${proyecto.titulo}`} />
            <div class="container">
                <Link to="/proyectos"><p>&lt;- Volver al índice</p></Link>
                <h1>{ proyecto.titulo }</h1>
                <Markdown className="cuerpo">{ cuerpoProcesado }</Markdown>
            </div>
        </></Layout>
    )
}

export default ProyectoTemplate

export const query = graphql`
    query ProyectoESTemplate($id: String!) {
        strapiProyecto(id: { eq: $id }) {
            id
            titulo
            cuerpo
            media{
                publicURL
            }
        }
    }
` 