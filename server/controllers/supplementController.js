const db = require("../Config/db")

const fetchAllSupplements = ((req,res) => {
  db.query('SELECT * FROM supplement;', async function (err, result) {
    if (err) throw err
    console.log('Results: ', result)
    return await res.status(401).json(result)
  })
})

module.exports = {
  fetchAllSupplements
}