//Create a server using express and create route /api/main and send the response explaining what is express
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get("/",(req,res)=>{
    res.send("I am in Home Page..")
    res.end();
})
app.get("/gallery",(req,res)=>{
    res.send("I am in Gallery Page")
    res.end()
})
app.get("/contact",(req,res)=>{
    // res.send("Get of Submit..")
    res.render("Contact")
})
// router.get('/contact', function(req, res, next) {
//     res.render('contact');
//   });
app.post('/submit',function(req,res){
    let name = req.body.name
    let email = req.body.email
    let number = req.body.number
    fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, function(err){
      if(err){
        console.log(err)
      }
      res.send("Data Submitted...")
    })
})
app.get('/submit',(req,res)=>{
    res.render('success')
})
// app.post("/submit",(req,res)=>{
//     res.send("Post worked..")
//     res.end();
//     //it is just a structure..its  not working bcz u need a front end part to post..something..
//     const content = "hello"
//     FileSystem.appendFile(path.join(__dirname,"/message.txt",content,function(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//         res.send("Data Submitted...")
//     }))
// })
app.listen(5000,()=>{
    console.log("Application is Running on port 5000");
})
module.exports=app