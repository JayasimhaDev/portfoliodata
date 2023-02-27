const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.json())
app.use(cors());
mongoose.connect(
    "mongodb+srv://jayasimha:jaya18jaya@cluster0.j1q0dzg.mongodb.net/visiters",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log("connection successfully");
})
const membersschema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    message:String,
  });
  const Member = mongoose.model('Member', membersschema);
  console.log(Member);
  app.post('/poster', async (req,res) => {
    console.log(await req.body)
    let member= await new  Member(req.body);
    member.save((err,response)=>{
  if(err){
    res.send({message:'error while adding item'})
  }else{
    res.send({message:"Member post successfully"})
  }
    });
  })

app.listen(2089, ()=>console.log("connect Successfully"));