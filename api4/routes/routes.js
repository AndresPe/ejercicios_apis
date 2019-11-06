const express = require('express')
const router = express.Router()

router.get('/rutas1/info', (request, response) => {
    let respuesta = {}
    respuesta.mensaje = "Obteniendo peticion desde la ruta 1 info"
    response.send(respuesta)
})

router.get('/rutas2/info', (request, response) => {
    let respuesta = {}
    respuesta.mensaje = "Obteniendo peticion desde la ruta 2 info"
    response.send(respuesta)
})

module.exports = router