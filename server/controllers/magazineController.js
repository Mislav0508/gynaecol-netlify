const db = require("../Config/db")

const fetchAllMagazines = ( (req,res) => {
  db.query('SELECT * FROM magazine;', async function (err, result) {
    if (err) throw err
    await res.json(result)
  })
})

module.exports = {
  fetchAllMagazines
}