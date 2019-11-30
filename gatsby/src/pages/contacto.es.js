import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.es'

const ContactoPage = ({ location }) => 
<Layout location={location}><>
    <SEO title="Al Hill - Contacto" />
    <h1>Contacto</h1>
    <div className="container lessmargin">
        <p>¿La línea de comandos de la home ha sido demasiado para tí? No te preocupes, me puedes mandar un mensaje con el formulario de ahí debajo <span role="img" aria-label="drink">🍹</span></p>
        <form>
            <div className="form-group">
                <label htmlFor="email">Tu email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea rows="5" name="message" id="message" />
            </div>
            <div className="box button"><h3>Envíalo!</h3></div>
        </form>
    </div>
</></Layout>

export default ContactoPage
