const db = require("../Config/db")

const fetchAllMagazines = ( (req,res) => {
  db.query('SELECT * FROM magazine;', async function (err, result) {
    if (err) throw err
    return await res.status(401).json(result)
  })
})

module.exports = {
  fetchAllMagazines
}