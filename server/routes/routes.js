const express = require("express")
const router = express.Router()
const magazineController = require("../controllers/magazineController")
const supplementController = require("../controllers/supplementController")

router.get("/articles", magazineController.fetchAllMagazines)
router.get("/supplements", supplementController.fetchAllSupplements)

module.exports = router