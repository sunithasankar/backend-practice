const Book = require("../models/Notebook")

exports.createBook = async(req, res)=>{
    try {
        const newBook = await Book.create(req.body)
        res.status(200).json(newBook)
    } catch (error) {
        console.log("Error", error)
    }
}
