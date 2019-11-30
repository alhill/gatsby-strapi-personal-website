import React, { Component } from 'react'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./reset.css"
import "./fira_code.css"
import "./style.css"

class Layout extends Component{
  state = {
    homeButtons: !["", "/"].includes(this.props.location.pathname.slice(3)) &&
                  ["", "/"].includes(this.props.location.state.from && this.props.location.state.from.slice(3))
  }

  componentDidMount(){
    if(["/", ""].includes(this.props.location.pathname.slice(3))){
      this.setState({ homeButtons: true })
    }
    else{
      this.setState({ homeButtons: false })
    }
  }

  render(){
    const { children, location } = this.props
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                  title
                  languages {
                      defaultLangKey
                      langs
                  }      
              }
            }
          }
        `}
        render={data => {
          const url = location.pathname;
          const { langs, defaultLangKey } = data.site.siteMetadata.languages;
          const langKey = getCurrentLangKey(langs, defaultLangKey, url);
          const homeLink = langKey === "en" ? "/en/" : "/"
          const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => {
            const cambiarEsto = item.langKey === "es" ? "project" : "proyecto"
            const porEsto = item.langKey === "en" ? "project" : "proyecto"
            return ({ 
              ...item, 
              link: item.link.replace(`/${defaultLangKey}/`, '/').replace(cambiarEsto, porEsto) 
            })
          });

          return (
              <div style={{ 
                minHeight: "100vh", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}>
                <div style={{ width: "100vw", overflowX: "hidden" }}>
                  <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} root={ homeLink } location={ location } />
                  <div className={`container boxes ${ this.state.homeButtons ? "" : "peque" }`}>
                    <Link to="/en/projects" state={{ from: location.pathname }} className="box">
                      <h2>Projects</h2>
                    </Link>
                    <Link to="/en/blog" state={{ from: location.pathname }} className="box">
                      <h2>Blog</h2>
                    </Link>
                    <Link to="/en/cv" state={{ from: location.pathname }} className="box">
                      <h2>CV</h2>
                    </Link>
                    <Link to="/en/contacto" state={{ from: location.pathname }} className="box">
                      <h2>Contact me</h2>
                    </Link>
                  </div>
                </div>

                <div
                    style={{
                      width: "100%",
                      maxWidth: 960,
                      padding: `0px 1.0875rem 1.45rem`,
                      paddingTop: 0,
                      flex: 1
                    }}
                    >
                    <main style={{
                        padding: "2em 0"
                    }}>{React.cloneElement(children, { langs: langsMenu })}</main>
                </div>
                <footer style={{ width: "100vw", overflowX: "hidden", display: "flex", justifyContent: "center" }}>
                  <p style={{
                    maxWidth: 960,
                    margin: "0 10px 20px 10px",
                  }}>
                    © 2019 - Made with <span role="img" aria-label="love">❤️</span>, <span role="img" aria-label="beer">🍺</span> & <span role="img" aria-label="poo">💩</span> by <span style={{ whiteSpace: "nowrap"}}>Al Hill</span> with the invaluable help of <Link to="/en/agradecimientos" state={{ from: location.pathname }}>all of {location.pathname === "/en/agradecimientos" ? "the people above ↑ ↑ ↑" : "this great people"}</Link>
                  </p>
                </footer>
            </div>
          )
        }}
      />
    )
  }
}

export default Layout


