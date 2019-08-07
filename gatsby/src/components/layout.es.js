import React, { Component } from 'react'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "./header"
import "./reset.css"
import "./fira_code.css"
import "./style.css"

class Layout extends Component {
  state = {
    homeButtons: !["", "/"].includes(this.props.location.pathname) &&
                  ["", "/"].includes(this.props.location.state.from)
  }

  componentDidMount(){
    if(["/", ""].includes(this.props.location.pathname)){
      this.setState({ homeButtons: true })
    }
    else{
        this.setState({ homeButtons: false })
    }
  }

  render(){
    const { children, location } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query LayoutQueryES {
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
                width: "100%"
              }}>
                  <div style={{ width: "100vw", overflowX: "hidden" }}>
                    <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} location={location} root={ homeLink } />
                    <div className={`container boxes ${ this.state.homeButtons ? "" : "peque" }`}>
                      <Link to="/proyectos" state={{ from: location.pathname }} className="box">
                        <h2>Proyectos</h2>
                      </Link>
                      <Link to="/blog" state={{ from: location.pathname }} className="box">
                        <h2>Blog</h2>
                        </Link>
                      <Link to="/cv" state={{ from: location.pathname }} className="box">
                        <h2>CV</h2>
                      </Link>
                      <Link to="/contacto" state={{ from: location.pathname }} className="box">
                        <h2>Contacto</h2>
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
                    <main style={{ padding: "2em 0" }}>{React.cloneElement(children, { langs: langsMenu })}</main>
                  </div>
                  <footer style={{ width: "100vw", overflowX: "hidden", display: "flex", justifyContent: "center" }}>
                    <p style={{
                      maxWidth: 980,
                      margin: "0 10px 20px 10px",
                    }}>
                        © 2019 - Hecho con <span role="img" aria-label="love">❤️</span>, <span role="img" aria-label="beer">🍺</span> & <span role="img" aria-label="poo">💩</span> por <span style={{ whiteSpace: "nowrap"}}>Al Hill</span> con la inestimable ayuda de <Link to="/en/agradecimientos" state={{ from: location.pathname }}>toda esta gente</Link>
                    </p>
                  </footer>
              </div>
          )
        }}
      />
    );
  };
}

export default Layout


