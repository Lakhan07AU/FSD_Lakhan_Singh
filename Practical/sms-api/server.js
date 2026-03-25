const mongoose = require("mongoose");
const express = require("express");
const Student = require("./Student")
const app = express();
app.use(express.json());
// Linking frint end to server
app.use(express.static("public"));

// Mongo DB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// ADD STUDENT -----> POST METHOD

app.post("/students",async(req,res)=>{
const student = new Student(req.body);
const result = await student.save();
res.json(student);
});

// GET STUDENTS
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

//Update Students --------> Put  Method
app.put("/students/:id",async(req,res)=>{
const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
) ;   
res.send(student);
});

//Delete STUDENTS

app.delete("/students/:id",async (req,res)=>{
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
});

// Creating Local host server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});