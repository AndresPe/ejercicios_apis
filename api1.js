const express = require('express')
const app = express()

app.use("/", (request, response)=>{
    response.send("API nodejs creada")
})

let port = 3000

app.listen(port, () => {
    console.log('El api esta corriendo en el http://localhost:'+port);
})