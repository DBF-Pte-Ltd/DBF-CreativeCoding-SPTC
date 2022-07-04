let socket;
function setup() {
  createCanvas(400, 400);
  background(255, 255, 0);
  socket = io.connect("http://localhost:3000");
  console.log("Socket is:: ", socket);
  socket.on("draw", drawFromOthers);
}
function drawFromOthers(data) {
  console.log("drawFromOthers:: ", data);
  ellipse(data.mouseX, data.mouseY, 60);
}
function draw() {
  //   ellipse(mouseX, mouseY, 60);
}
function mouseDragged() {
  console.log(mouseX + "," + mouseY);
  ellipse(mouseX, mouseY, 36);
  socket.emit("draw", { mouseX, mouseY });
}
