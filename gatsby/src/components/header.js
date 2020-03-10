import { Link } from "gatsby"
import React from "react"
import SelectLanguage from './selectLanguage'

const Header = ({ langs, root, location }) => {
  const l = langs.find(l => l.selected).langKey
  return (
    <header id="hero">
      <div className="inner">
          <div className="left">
            <Link to={ root } state={{ from: location && location.pathname }} style={{ color: "white" }}><h1>Al Hill</h1></Link>
            <h2><span className="lime">==></span> { l === "en" ? "Web developer" : "Desarrollador web" }</h2>
            <h2><span className="lime">==></span> { l === "en" ? "Sound technician" : "Técnico de sonido" }</h2>
          </div>
          <SelectLanguage langs={langs} />
      </div>
    </header>
  )
}

export default Header
