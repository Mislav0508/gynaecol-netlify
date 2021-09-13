const mysql = require("mysql")
require('dotenv').config()

// MYSQL
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gyn'
})

module.exports = db