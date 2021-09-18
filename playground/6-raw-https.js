const { error } = require("console");
const http=require("http");

const url="http://api.weatherstack.com/current?access_key=0ca8d94415a5f5ccfb5c39e276d4dc55&query=45,-75&units=f"

const request=http.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
    })
    response.on('end',()=>{
        const body=JSON.parse(data);
        console.log(body);
    })
});


request.on('error',(error)=>{
    console.log('An Error',error);
})

request.end();