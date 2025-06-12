const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bookRouter = require("./Routes/bookRoute")

const app = express()

dotenv.config()
mongoose.connect(process.env.API_URI)
.then(()=>{
    console.log("connected to Mongooose")
})
.catch((error)=>{
console.log(error)
})

app.use("/api", bookRouter)

app.get("/abcd", (req, res)=>{
    res.send("Hi this is Sunitha")
})

app.listen(5500, ()=>{
    console.log("Server Started 5500")
})