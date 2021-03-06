const geocode=require("./utils/geocode");
const forecast=require("./utils/forecast");
const path=require("path");
const express=require("express");
const exp = require("constants");
const { title } = require("process");
const hbs=require("hbs");
const { error } = require("console");
const app=express();
//Define path for express config

app.use(express.static(path.join(__dirname,'../public')));
const viewspath=path.join(__dirname,'../templates/views')
const partials=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views',viewspath);
hbs.registerPartials(partials);

app.get('',(req,res)=>{
    res.render('index',{
        helpText:"this is some helpful text",
        title:'Weather App',
        name:'Uttkarsh Raj'
        
    });
 
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Abount Me',
        name:'Uttkarsh'
    });

})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:"This is helpful text",
        title:"Help",
        name:'Uttkarsh',
    });

})

// app.get('',(req,res)=>{
//     res.send("<h1>Weather</h1>");
// })

//app.com
//app.com/help
//app.com/about



app.get("/weather",(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Please Provide a Location"
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
          if(error){
              return res.send({error});
          }
          forecast(latitude,longitude,(error,data)=>{
              if(error){
                  return res.send({error});
              }
              res.send({
                  forecast:data,
                  location,
                  address:req.query.address,
              })
          })
    })

    // res.send({
    //     forecast:"It is snowing",
    //     location:"Jammu",
    //     address:req.query.address,
    // })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term',
        })
    }
    console.log(req.query.search);
    res.send({
        product:[]
    })
})

app.get("/help/*",(req,res)=>{
    res.render("404",{
        title:'404',
        name:"Uttkarsh Raj",
        error:"Help article not found",
    })
})

app.get('*',(req,res)=>{
    res.render("404",{
        title:'404',
        name:'Uttkarsh Raj',
        error:'Page Not Found',
    })

})
app.listen(3000,()=>{
    console.log("Server is up");
}); 