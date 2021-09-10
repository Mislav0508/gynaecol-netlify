const express = require("express")
const routes = require("./routes/routes")
var cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(routes)

app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
