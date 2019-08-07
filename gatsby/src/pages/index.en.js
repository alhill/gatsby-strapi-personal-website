import React, { Component } from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout.en'
import { detect } from 'detect-browser';

class IndexPage extends Component {
  state = {
    hidden: "",
    frasesEscritas: []
  }

  scrollito = React.createRef()

  buscaEnter = async e => {
    const h = this.state.hidden
    if(e.key === "Enter"){
      if(h.toLowerCase() === "message" && this.state.escribiendoMensaje !== true && this.state.escribiendoEmail !== true){
        this.setState({ 
          frasesEscritas: [
            ...this.state.frasesEscritas,
             h, 
            "Write your message"
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
              "Now write your email address"
            ], 
            escribiendoMensaje: false, 
            escribiendoEmail: true,
            mensaje: this.state.hidden, 
            hidden: ""
          })
        }
        else{
          alert("Nothing to say? Message field is empty T.T")
        }
      }
      else if(this.state.escribiendoEmail === true){
        if((/\S+@\S+\.\S+/gm).test(this.state.hidden)){
          console.log({ email: this.state.hidden, mensaje: this.state.mensaje })
          this.setState({ 
            frasesEscritas: [
              ...this.state.frasesEscritas, 
              h, 
              "Message has been sent successfully!"
            ], 
            escribiendoEmail: false,
            email: this.state.hidden,
            hidden: ""
          })
        }
        else{
          alert("This email smells weird")
        }
      }
      else{
        const respuesta = h === "pwd" ? "/home/alhill" : (
                          h.slice(0, 2) === "ls" ? `porn    documents    important_files    cool_things` : (
                          ["cd documents", "cd cool_things", "cd documents", "cd important_files", "cd .."].includes(h) ? "You haven't enough permissions, sorry" : (
                          h === "cd porn" ? "I know you would try to enter there... But you haven't enough permissions, sorry" : ( 
                          h.slice(0, 3) === "cd " ? "This directory doesn't exist" : (
                          h.slice(0, 6) === "rm -rf" ? "Deleting..." : (
                          h === "whoami" ? "visitor": (
                          h.slice(0, 4) === "sudo" ? "I don't think so. Go make me a sandwich" : (
                          h === "su" ? "Mmm, no" : "Command not found"
        ))))))))
        
        await this.setState({ frasesEscritas: [...this.state.frasesEscritas, h, respuesta], hidden: "" })

        if(respuesta === "Deleting..."){
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
              <p className="lime">visitor@<span id="userAgent">{(detect().name.charAt(0).toUpperCase() + detect().name.slice(1) + "-" + detect().os).replace(" ", "")}</span><span style={{ color: "#fafafa" }}>:~</span></p>
              <p>$ Hi, I'm Al Hill, web developer and sound technician</p>
              <p>$ It's a weird mixture... but I also like guitar, beer, videogames and a bunch of things more</p>
              <p>$ So welcome, get comfy, snoop around wherever you want and grab a beer from the fridge if you fancy</p>
              <p>$ BTW, to contact me you can write the command <span className="fuchsia">message</span> in this cute terminal and press Enter</p>
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
