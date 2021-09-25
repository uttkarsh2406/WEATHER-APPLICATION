const request=require("request")
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=0ca8d94415a5f5ccfb5c39e276d4dc55&query="+latitude+","+longitude+"&units=f"
    request({url:url,json:true},(error,response) =>{
        if(error){
            callback("Unable To Connect To Locaiton Services",undefined);
        }
        else if(response.body.error){
            callback("Unable TO Find Location",undefined);
        }
        else{
            
            callback(undefined,response.body.current.weather_descriptions[0] +". it is currently "+response.body.current.temperature+" degree out. It feels like " +response.body.current.feelslike+ " degree")
            
        }
    })
}

module.exports=forecast;
// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//         }
//     })
// }

// module.exports = forecast