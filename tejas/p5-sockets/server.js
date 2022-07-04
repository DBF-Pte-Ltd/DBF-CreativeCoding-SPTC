var express = require("express");
var app = express();
var server = app.listen(3000);

app.use(express.static("public"));

console.log("My socket server is running!");

var socket = require("socket.io");

var io = socket(server);

//handle new connection event
io.sockets.on("connection", newConnection);

function newConnection(socket) {
  console.log("newConnection:: ", socket.id);

  socket.on("draw", broadcastDraw);

  function broadcastDraw(data) {
    console.log("broadcastDraw:: ", data);
    socket.broadcast.emit("draw", data);
  }
}
