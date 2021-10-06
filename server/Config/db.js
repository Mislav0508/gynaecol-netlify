const mysql = require("mysql")

// MYSQL
// var db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Mislav05080639',
//   database: 'gynaecol'
// })

var db = mysql.createConnection({
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'bc6a1c4990f14f',
  password: '8570391c',
  database: 'heroku_cf47678c333c77d',
  ssl  : {
    rejectUnauthorized: false
  }
})

module.exports = db