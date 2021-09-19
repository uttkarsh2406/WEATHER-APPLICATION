const path=require("path");
const express=require("express");
const exp = require("constants");
const { title } = require("process");


const app=express();
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'../public')));
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Uttkarsh'
    });
 
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather App',
        name:'Uttkarsh'
    });

})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:"This is helpful text",
       
    });

})

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