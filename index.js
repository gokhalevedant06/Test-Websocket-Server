const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send("Working");
});

io.on('connection', (socket) => {
  console.log('User Connected');
  socket.on("hello", (...args) => {
    console.log("HELLO");
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on PORT : ${process.env.PORT || 3000}`);
});
