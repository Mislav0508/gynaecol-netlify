const db = require("../Config/db")

const fetchAllSupplements = ((req,res) => {
  db.query('SELECT * FROM gynaecol.supplement;', function (err, result) {
    if (err) throw err
    let supplements = result
    console.log('Results: ', result)
    res.json(supplements)
  })
})

module.exports = {
  fetchAllSupplements
}