const express = require('express')
const app = express()
app.use(express.json())
const body_parser = require('body-parser');
app.use(body_parser)



app.use('/', (request, response, next) => {
    let body = request.body
    console.log(body);
    response.send(body)
    next()
    
})


let port = 3004

app.listen(port, () => {
    console.log("el servidor se ejecuta desde http://localhost:"+port);
})