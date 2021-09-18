const express=require("express");
const app=express();


app.get('',(req,res)=>{
    res.send("Hello i am Uttkarsh Raj");
})

//app.com
//app.com/help
//app.com/about

app.get('/help',(req,res)=>{
    res.send("HELP PAGE");
})

app.get("/about",(req,res)=>{
    res.send("IT's About page")
})


app.get("/weather",(req,res)=>{
    res.send("Weather Page")
})

app.listen(3000,()=>{
    console.log("Server is up");
});