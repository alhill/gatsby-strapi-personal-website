import React, { useState } from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.en'

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
            <SEO title="Al Hill - Acknowledgments" />
            <h1>Thanks!</h1>
            <div className="container lessmargin">
                <p>Without the help and the work of many people nothing of this would be possible. Aside from the space they have in my <span role="img" aria-label="heart">❤️</span> they deserve a special acknowledgment</p>
                <ul>
                    <li><a href="https://srtanognog.com" target="_blank" rel="noopener noreferrer">Srta. Nognog</a>: Her magic eyes can turn everything into something beautiful... without her this website would look more like <span id="killcss" onClick={() => killcss()}>this</span>.</li>
                </ul>
                <ul>
                    <li><a href="https://blacknosaur.com" target="_blank" rel="noopener noreferrer">Blacknosaur</a>: When you have everthing to learn you need people to believe in you. Thanks to all the good people which I have worked with there <span role="img" aria-label="family">👨‍👩‍👧‍👦</span></li>
                </ul>
                <ul>
                    <li><a href="http://tonsky.me/" target="_blank" rel="noopener noreferrer">Tonsky</a>: For sharing open-source the beautiful typography <a href="https://github.com/tonsky/FiraCode" target="_blank" rel="noopener noreferrer">Fira Code</a>, always on my screen and half of the flow of this website</li>
                </ul>
                <ul>
                    <li><a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">To all the team of GatsbyJS</a>: Because try it yourself... they don't bluff when they say it's blazing fast!</li>
                </ul>
                <ul>
                    <li><a href="https://strapi.io/" target="_blank" rel="noopener noreferrer">To all the team of Strapi</a>: Because there's no front without back and if it's as easy, much better</li>
                </ul>
            </div>
        </></Layout>
    )
}

export default AgradecimientosPage
