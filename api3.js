const express = require('express')
const app = express()

app.use("/", (request, response)=>{
    response.status(404).send('<h1>Pagina no encontrada</h1>')
})

let port = 3002

app.listen(port, () => {
    console.log('El api esta corriendo en el http://localhost:'+port);
})