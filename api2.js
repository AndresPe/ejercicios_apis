const express = require('express')
const app = express()

app.use("/", (request, response)=>{
    let respuesta = {}
    respuesta.menssage = "Respuesta en JSON"
    response.send(respuesta)
})

let port = 3001

app.listen(port, () => {
    console.log('El api esta corriendo en el http://localhost:'+port);
})