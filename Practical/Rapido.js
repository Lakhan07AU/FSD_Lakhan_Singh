const express = require('express')
const app = express();
app.get('/about',(req,res)=>{
    req.setEncoding("This is About Page")
});
app.listen(5000,()=>{
    console.log("http://localhost:5000/")
});