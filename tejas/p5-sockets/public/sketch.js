let socket;
let r, g, b, a;

function setup() {
  createCanvas(400, 400);
  background(33);
  noStroke();

  socket = io.connect("http://localhost:3000");
  console.log("Socket is:: ", socket);
  socket.on("draw", drawFromOthers);

  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 100
  a = random(100, 200); // a is a random number between 200 - 255
}

function drawFromOthers(data) {
  console.log("drawFromOthers:: ", data);
  fill(data.r, data.g, data.b, data.a);
  ellipse(data.mouseX, data.mouseY, 60);
}

function draw() {
  //   ellipse(mouseX, mouseY, 60);
}

function mouseDragged() {
  fill(r, g, b, a);
  //   console.log(mouseX + "," + mouseY);
  ellipse(mouseX, mouseY, 36);
  socket.emit("draw", { mouseX, mouseY, r, g, b, a });
}
