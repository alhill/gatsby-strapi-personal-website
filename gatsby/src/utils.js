export const procesarCuerpo = (cuerpoRaw, imagenes) => {
    console.log({ cuerpoRaw, imagenes })
    const regexDeLaMuerte = cuerpoRaw//.split(/(?<=!\[.*\]\()(.*?)(?=\))/gm)
    const cuerpoProcesado = regexDeLaMuerte.map((chunk, i) => {
        if(i%2){ return "http://localhost:1337" + imagenes[parseInt(chunk, 10)].url }
        else{ return chunk }
    }).reduce((a, b) => a + b, "")
    return cuerpoProcesado
}