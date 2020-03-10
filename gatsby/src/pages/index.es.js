import React, { Component } from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.es'
import { detect } from 'detect-browser';

class IndexPage extends Component {
  state = {
    hidden: "",
    frasesEscritas: [],
    escribiendoMensaje: false,
    escribiendoEmail: false,
    mensaje: "",
    email: ""
  }

  scrollito = React.createRef()
  componentDidMount(){
      window.scrollTo(0, 0)
  }

  buscaEnter = async e => {
    const h = this.state.hidden
    if(e.key === "Enter"){
      if(h.toLowerCase() === "mensaje" && this.state.escribiendoMensaje !== true && this.state.escribiendoEmail !== true){
        this.setState({ 
          frasesEscritas: [
            ...this.state.frasesEscritas,
             h, 
            "Escribe el mensaje que quieres enviar"
          ], 
          escribiendoMensaje: true,
          hidden: ""
        })
      }
      else if(this.state.escribiendoMensaje === true){
        if(this.state.hidden.length > 0){
          this.setState({ frasesEscritas: [
              ...this.state.frasesEscritas, 
              h, 
              "Ahora introduce tu email para que pueda contactar contigo"
            ], 
            escribiendoMensaje: false, 
            escribiendoEmail: true,
            mensaje: this.state.hidden, 
            hidden: ""
          })
        }
        else{
          alert("Nada que decir? El mensaje está en blanco T.T")
        }
      }
      else if(this.state.escribiendoEmail === true){
        if((/\S+@\S+\.\S+/gm).test(this.state.hidden)){
          console.log({ email: this.state.hidden, mensaje: this.state.mensaje })
          this.setState({ 
            frasesEscritas: [
              ...this.state.frasesEscritas, 
              h, 
              "El mensaje se ha enviado correctamente!"
            ], 
            escribiendoEmail: false,
            email: this.state.hidden,
            hidden: ""
          })
        }
        else{
          alert("Ese email huele raro")
        }
      }
      else{
        const respuesta = h === "pwd" ? "/home/alhill" : (
                          h.slice(0, 2) === "ls" ? `porno    documentos    archivos_importantes    cosas_chachis` : (
                          ["cd documentos", "cd archivos_importantes", "cd documentos", "cd cosas_chachis", "cd .."].includes(h) ? "No tienes permisos para acceder al directorio" : (
                          h === "cd porno" ? "Estaba claro que ibas a intentar entrar aqui, je. Pero no tienes permisos para entrar aquí" : ( 
                          h.slice(0, 3) === "cd " ? "No existe el directorio" : (
                          h.slice(0, 6) === "rm -rf" ? "Borrando..." : (
                          h === "whoami" ? "visitante": (
                          h.slice(0, 4) === "sudo" ? "Aquí solo sudo yo" : (
                          h === "su" ? "Mmm, me parece que no" : "Comando no reconocido"
        ))))))))
        
        await this.setState({ frasesEscritas: [...this.state.frasesEscritas, h, respuesta], hidden: "" })

        if(respuesta === "Borrando..."){
          Array(100).fill(null).forEach((e, i) => { 
            if(i === 0){ window.setTimeout(() => {
                console.log(this.state.files.system)
              }, 1000)
            }
            this.setState({ frasesEscritas: [...this.state.frasesEscritas, "Has roto mi web :("]})
          })
        }
      }
      this.scrollito.current.scrollIntoView({ behavior: 'smooth' })
    }
  } 

  render(){
    return (
      <Layout location={this.props.location}>
        <>
          <SEO title="Al Hill" />
          <div className="container terminal">
              <p className="lime">visitante@<span id="userAgent">{(detect().name.charAt(0).toUpperCase() + detect().name.slice(1) + "-" + detect().os).replace(" ", "")}</span><span style={{ color: "#fafafa" }}>:~</span></p>
              <p>$ Hola, soy Al Hill, desarrollador web y técnico de sonido</p>
              <p>$ Pero si esa ya era una mezcla rara también me gusta tocar la guitarra, la cerveza, los videojuegos y mil cosas más</p>
              <p>$ Asi que bienvenido, ponte cómodo, cotillea lo que quieras y si te apetece, coge una birra del frigo</p>
              <p>$ Por cierto, para contactar conmigo escribe el comando <span className="fuchsia">mensaje</span> en este bonito terminal y pulsa Intro.</p>
              <div id="writing">
                  {
                    this.state.frasesEscritas.map((f, i) => {
                      if(!(i % 2)){
                        return <p key={ i }>$ { f }</p>
                      }
                      else{
                        return <p style={{ color: "fuchsia" }} key={ i }>{ f }</p>
                      }
                    })
                  }
                  <p>$ { this.state.hidden }<span className="lime writing"></span><span className="blink">_</span></p>
              </div>
              <input autoFocus={true} type="text" id="hidden" value={ this.state.hidden } onChange={e => this.setState({ hidden: e.target.value }) } onKeyDown={this.buscaEnter} />
              <div className="dummy" ref={this.scrollito}></div>
          </div>
          </>
        </Layout>
    )
  }
}

export default IndexPage;
