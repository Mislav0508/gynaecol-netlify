const db = require("../Config/db")

const fetchAllSupplements = ((req,res) => {
  db.query('SELECT * FROM supplement;', function (err, result) {
    if (err) throw err
    const supplements = result
    console.log('Results: ', result)
    res.json(supplements)
  })
})

module.exports = {
  fetchAllSupplements
}