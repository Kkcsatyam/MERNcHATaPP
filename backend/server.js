const express =require("express");
const dotenv=require("dotenv");
const{chats}=require("./data/data");

const app=express();
dotenv.config();
app.get("/",(req,res)=>{
    res.send("API is Running Succesfully");
});
app.get('/api/chat',(req,res)=>{
    res.send(chats);
})




const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`Server running on PORT ${PORT}`));