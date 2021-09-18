const fs=require("fs");
const { json } = require("stream/consumers");
// const book={
//     title:"Ego is Enemy",
//     author:"Ryan Holiday",
// }

// const bookjson=JSON.stringify(book);
// // console.log(bookjson);

// // const parse_data=JSON.parse(bookjson);
// // console.log(parse_data.author);

// fs.writeFileSync("1-json.json",bookjson);

// const re=fs.readFileSync('1-json.json');
// const dataJSON=re.toString();
// const get_data=JSON.parse(dataJSON);
// console.log(get_data.title);

const st=fs.readFileSync('1-json.json');
const stdata=st.toString();
const data=JSON.parse(stdata);
data.name="uttkarsh";
data.age=20;

const useruttkarsh=JSON.stringify(data);
fs.writeFileSync("1-json.json",useruttkarsh);