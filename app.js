const express = require("express");
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get('/',(req,res)=>{
    app.sendFile(__dirname+'/public/index.html');
})
io.on("connection", (socket) => {
    console.log("user connected to socket.IO server");
    console.log(socket.id)
})
server.listen(PORT, ()=>{
    console.log("server is running ... ")
});
