const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const Book = require("./Book");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Serve public folder
app.use(express.static(path.join(__dirname,"public")));
//MongoDB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/bookdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=> console.log(err));


// ADD book -----> POST METHOD
app.post("/books",async(req,res)=>{
const book = new Book(req.body);
const result = await book.save();
res.json(result);
});

// GET book
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

//Update book --------> Put  Method
app.put("/books/:id",async(req,res)=>{
const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
) ;   
res.json(book);
});

//Delete book

app.delete("/books/:id",async (req,res)=>{
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json(book);
});

// SEARCH BOOK
app.get("/books/search/:name",async(req,res)=>{

const name = req.params.name;

const books = await Book.find({
booktitle: {$regex:name,$options:"i"}
});

res.json(books);

});


app.listen(3000,()=>{
console.log("Server running http://localhost:3000/book.html");
});

