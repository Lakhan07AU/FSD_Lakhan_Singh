const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    booktitle :  String ,
    author : String ,
    publishdate: String ,
    price : Number ,
});
module.exports = mongoose.model("Book",BookSchema);