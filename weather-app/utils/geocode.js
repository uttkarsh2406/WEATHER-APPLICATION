const request = require("request");


const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoidXR0a2Fyc2hyYWoxIiwiYSI6ImNrdG8zcjZyNjAycGYyb2w4ajcyNm9mczkifQ.YVobNWPL0SLyojg0-Yoopg&limit=1";
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback("Unable TO Connect To Location Services!",undefined);
        }
        else if(body.features.length===0){
            callback("Unable To Find Location !",undefined);
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name,
            });
            
            
        }
        
    })
}

module.exports=geocode;