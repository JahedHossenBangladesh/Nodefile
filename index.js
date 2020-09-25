const express = require('express');


const app = express();

// function rootcall (req,res){
//     res.send("Thank YOu");
// }
// const rootcall = (req,res) =>{
//     res.send("Thank you")
// }
app.get('/',(req,res) => res.send("Thank You for calling me the User"));


app.listen(3000,() => console.log("listening the port 3000"))