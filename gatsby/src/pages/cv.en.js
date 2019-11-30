import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.en'

const CVPage = ({ location }) => 
<Layout location={location}><>
    <SEO title="Al Hill - CV" />
    <div className="container">
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <h1 style={{ marginRight: "2em", padding: 0 }}>CV</h1>
            <div className="box peque" style={{ width: "300px", display: "flex", alignItems: "center", margin: 0 }}><h2>Descargar PDF</h2></div>
        </div>
    </div>
</></Layout>

export default CVPage

