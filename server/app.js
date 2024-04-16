const express=require('express');
const {Server}=require('socket.io');
const {createServer}=require('http');
const { log } = require('console');



const app=express();
const server=createServer(app);

const io=new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        methods:["GET","POST"],
        credentials:true,
    }
});

io.on('connection',(socket)=>{
   console.log("Id",socket.id)
  socket.on("disconnect",()=>{
    console.log('user disconnected',socket.id);
  })
})

app.use(express.json());


server.listen(8000,(req,res)=>{
    console.log("server is connteced");
})