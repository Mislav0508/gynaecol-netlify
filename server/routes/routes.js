const express = require("express")
const router = express.Router()
const magazineController = require("../controllers/magazineController")
const supplementController = require("../controllers/supplementController")
const nodemailerController = require("../controllers/nodemailerController")

router.get("/articles", magazineController.fetchAllMagazines)
router.get("/supplements", supplementController.fetchAllSupplements)
router.post("/", nodemailerController.main)

module.exports = router