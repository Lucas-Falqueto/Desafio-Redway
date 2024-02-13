const express = require('express')
const app = express()
const pages = require('./src/routes/pages')
const createConnectionDB = require("./src/V1/config/db_config")
const routesApi = require('./src/V1/routes/routes')

app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use(express.json());

createConnectionDB()

app.use('/', pages)
app.use('/api/', routesApi)
module.exports = app;