import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from "../components/seo"
import Layout from '../components/layout.es'
import { procesarCuerpo } from '../utils';
import Markdown from 'markdown-to-jsx'

const EntradaTemplate = ({ data, location }) => {
    const entrada = data.strapiEntrada
    const cuerpoProcesado = procesarCuerpo(entrada.cuerpo, entrada.media)
    return (
        <Layout location={location}><>
            <SEO title={`Al Hill - ${entrada.titulo}`} />
            <div className="container">
                <Link to="/blog"><p>&lt;- Volver al índice</p></Link>
                <h1>{ entrada.titulo }</h1>
                <Markdown className="cuerpo">{ cuerpoProcesado }</Markdown>
            </div>
        </></Layout>
    )
}

export default EntradaTemplate

export const query = graphql`
    query EntradaESTemplate($id: String!) {
        strapiEntrada(id: { eq: $id }) {
            id
            titulo
            cuerpo
            media{ url }
        }
    }
` 
