import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.es'

const AgradecimientosPage = ({ location }) => {

    const killcss = () => {
        [...document.styleSheets].forEach(cssFile => {
            cssFile.disabled = true
        })
        setTimeout(() => {
            [...document.styleSheets].forEach(cssFile => {
                cssFile.disabled = false
            })
        }, 3000)
    }

    return (
        <Layout location={location}><>
            <SEO title="Al Hill - Agradecimientos" />
            <h1>¡Gracias!</h1>
                <div className="container lessmargin">
                    <p>Sin la ayuda de mucha gente y el trabajo de otros tantos nada de esto sería posible. Aparte del huequito que tienen en mi <span role="img" aria-label="heart">❤️</span> se merecen una mención especial</p>
                    <ul>
                        <li><a href="https://srtanognog.com" target="_blank" rel="noopener noreferrer">Srta. Nognog</a>: Sin el pedazo de ojo que tiene para convertir cualquier cosa en algo bonito esta web se parecería más a <span id="killcss" onClick={() => killcss()}>esto</span>.</li>
                    </ul>
                    <ul>
                        <li><a href="https://blacknosaur.com" target="_blank" rel="noopener noreferrer">Blacknosaur</a>: Hace falta que crean en tí sobre todo cuando aún tienes todo por aprender. Gracias a toda la buena gente con la que me he cruzado trabajando allí <span role="img" aria-label="family">👨‍👩‍👧‍👦</span></li>
                    </ul>
                    <ul>
                        <li><a href="http://tonsky.me/" target="_blank" rel="noopener noreferrer">Tonsky</a>: Por compartir libremente la preciosa tipografía <a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noopener noreferrer">Fira Code</a>, que tantas horas al día paso viendo y que le da todo el flow a esta web</li>
                    </ul>
                    <ul>
                        <li><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">A todo el equipo de GatsbyJS</a>: Porque comprobadlo vosotros mismos... no van de farol cuando dicen que es rapidísimo.</li>
                    </ul>
                    <ul>
                        <li><a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">A todo el equipo de Strapi</a>: Porque no hay front sin back y si te lo ponen tan fácil, mucho mejor.</li>
                    </ul>
                </div>
        </></Layout>
    )
}

export default AgradecimientosPage
