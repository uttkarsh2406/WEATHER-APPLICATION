// console.log("Starting");
// setTimeout(() => {
//     console.log("2 SEC Later");
// },2000);
// setTimeout(()=>{
//     console.log("0 sec Later");
// },0)
// console.log("Stopping"); 


const request=require("request");
const geocode=require("./utils/geocode")
const forecast=require("./utils/forecast")
// const url="http://api.weatherstack.com/current?access_key=0ca8d94415a5f5ccfb5c39e276d4dc55&query=37.8267,-122.4233&units=f"


// request({url:url,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect to Weather Service");
//     }
//     else if(response.body.error){
//         console.log("Unable to find location");
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] +". it is currently "+response.body.current.temperature+" degree out. It feels like " +response.body.current.feelslike+ " degree");

//     }
// })

// const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidXR0a2Fyc2hyYWoxIiwiYSI6ImNrdG8zcjZyNjAycGYyb2w4ajcyNm9mczkifQ.YVobNWPL0SLyojg0-Yoopg&limit=1";

// request({url:geocode,json:true},(error,respons)=>{
//     if(error){
//         console.log("Unable to connect to location Services");

//     }
//     else if(respons.body.features.length===0){
//         console.log("Unable to find location");

//     }
//     else{
//     const longitude=respons.body.features[0].center[0]
//     const latitude=respons.body.features[0].center[1]
//     console.log(longitude);
//     console.log(latitude);
//     }
// })


// const geocode=(address,callback)=>{
//     const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidXR0a2Fyc2hyYWoxIiwiYSI6ImNrdG8zcjZyNjAycGYyb2w4ajcyNm9mczkifQ.YVobNWPL0SLyojg0-Yoopg&limit=1";
//     request({url:url,json:true},(error,result)=>{
//         if(error){
//             callback("Unable TO Connect To Location Services!",undefined);
//         }
//         else if(result.body.features.length===0){
//             callback("Unable To Find Location !",undefined);
//         }
//         else{
//             callback(undefined,{
//                 latitude:result.body.features[0].center[0],
//                 longitude:result.body.features[0].center[1],
//                 location:result.body.features[0].place_name,
//             });
            
            
//         }
        
//     })
// }

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidXR0a2Fyc2hyYWoxIiwiYSI6ImNrdG8zcjZyNjAycGYyb2w4ajcyNm9mczkifQ.YVobNWPL0SLyojg0-Yoopg&limit=1'

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (response.body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].center[0],
//                 longitude: response.body.features[0].center[1],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const address=process.argv[2];
if(!address){
    console.log("Please Provide Address");

}
else{
    geocode(address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return console.log(error);
        }   
        forecast(latitude,longitude, (error, data) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(data);
        })
    
    
    })

}


