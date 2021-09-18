setTimeout(()=>{console.log("Two second are up");},2000)

const name=['Uttkarsh','Jagriti','rishabh','Fucker'];
const shortnames=name.filter((nam)=>{
    return nam.length<=4;
})

const geocode=(address,callback)=>{
    
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0,
        }
        callback(data);
    },2000)
}

const data=geocode('philadelphia',(data)=>{
    console.log(data);
});

const add=(a,b,callback)=>{
    setTimeout(()=>{
       callback(a+b);
    },2000)
    
}

add(1,4,(sum)=>{
    console.log(sum);
})