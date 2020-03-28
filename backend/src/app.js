const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
// const bodyParser = require('body-parser') TODO: Review express.json ??
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

/**
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
 * Route PArams: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
* SQL: MySql, SqLite, PostgreSQL, Oracle, Microsoft SQL Server
* NOSQL: MongoDB, CouchDB, etc...
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */

module.exports = app