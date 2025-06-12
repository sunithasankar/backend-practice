// const mongoose = require("mongoose")

// const bookSchme = new mongoose.Schema({
//     bookname :{
//         type:String,
//         required:true,
        
//     },
//     price:{
//         type:Number,
//         required:true,        
//     }
    
    
// })

// module.exports= mongoose.model("Notebook", bookSchme)


const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({  // Corrected variable name to "bookSchema"
    bookname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,        
    }
});

module.exports = mongoose.model("Notebook", bookSchema);  // Now using the correct variable