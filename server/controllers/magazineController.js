const db = require("../Config/db")

const fetchAllMagazines = ((req,res) => {
  db.query('SELECT * FROM magazine;', function (err, result) {
    if (err) throw err
    res.json(result)
  })
})

module.exports = {
  fetchAllMagazines
}