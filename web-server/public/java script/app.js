console.log("hello i am utttkarsh");

// fetch ('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })


// fetch('http://localhost:3000/weather?address=!').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error);
//         }
//         else{
//              console.log(data.location);
//              console.log(data.forecast);
//         }
//     })
// })

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
weatherform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location=search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error);
        }
        else{
             console.log(data.location);
             console.log(data.forecast);
        }
    })
})

})