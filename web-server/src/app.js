const path=require("path");
const express=require("express");
const exp = require("constants");

console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const app=express();
app.use(express.static(path.join(__dirname,'../public')))

// app.get('',(req,res)=>{
//     res.send("<h1>Weather</h1>");
// })

//app.com
//app.com/help
//app.com/about



app.get("/weather",(req,res)=>{
    res.send({
        forecast:"It is snowing",
        location:"Jammu",
    })
})

app.listen(3000,()=>{
    console.log("Server is up");
});