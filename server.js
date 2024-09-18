const {Server} = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);

const io = new Server( server , {
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET" , "POST" , "PUT"]
    }
})

const users = {}
io.on("connection" , (socket) => {
    console.log(`New Connection : ${socket.id}`)
    const userdata = socket.handshake.query.userid;

    if(userdata){
       users[userdata] = socket.id;
       console.log(users)
    }

    socket.on("disconnect" , () => {
        console.log(`Disconnted User : ${socket.id}`)
    })

})

export {app , io , server};
