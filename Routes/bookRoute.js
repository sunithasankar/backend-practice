const express = require("express")
const wednesday = express.Router()
const miyapur = require("../controllers/bookController")

wednesday.post("/addbook", miyapur.createBook)



module.exports = wednesday