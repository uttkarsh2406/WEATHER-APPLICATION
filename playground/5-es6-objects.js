const name="uttkarsh";
const userage=20;

const user={
    name,
    age:userage,
    location:"Jammu",

}

console.log(user);

const product={
    label:"red Notebook",
    price:3,
    stock:201,
    salePrice:undefined,
    rating:4.3,
}

const {label:productlabel=100,stock,rating=5}=product
console.log(productlabel);
console.log(stock);
console.log(rating);


// const transaction=(type,{label,stock})=>{
//     console.log(type,label,stock);

// }


// transaction('order',product)

const transaction=(type,{label,stock=0}={})=>{
    console.log(type,label,stock);

}

transaction('order',product)