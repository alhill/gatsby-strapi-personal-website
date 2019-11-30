import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.en'

const ContactoPage = ({ location }) => 
<Layout location={location}><>
            <SEO title="Al Hill - Contacto" />
            <h1>Contact me</h1>
            <div className="container lessmargin">
                <p>The command line of the home page was too much for you? Don't worry, you can also send me a message with the form below <span role="img" aria-label="drink">🍹</span></p>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Your email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea rows="5" name="message" id="message" />
                    </div>
                    <div className="box button"><h3>Send!</h3></div>
                </form>
            </div>
      </></Layout>

export default ContactoPage
