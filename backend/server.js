const express =require("express");
const{chats}=require("./data/data");

const app=express();
app.get("/",(req,res)=>{
    res.send("API is Runnimg");
});
app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    console.log(req.params.id);
})



app.listen(5000,console.log("server starting om PORT 5000"));