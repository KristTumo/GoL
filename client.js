var socket = io();
let weath = "winter";
var side = 10;
function setup() {
  createCanvas(50 * side, 50 * side);
  background("pink");
}

socket.on("weather", function (data) {
  weath = data;
});

function nkarel(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
      var obj = matrix[y][x];
      if (matrix[y][x] == 0) {
        fill("white");
      } else if (matrix[y][x] == 1) {
        if (weath == "summer") {
          fill("green");
        }
        if (weath == "winter") {
          fill("white");
        }
      } else if (matrix[y][x] == 2) {
        fill("yellow");
        if (weath == "summer") {
          fill("light yellow");
        }
      } else if (matrix[y][x] == 3) {
        fill("red");
      } else if (matrix[y][x] == 4) {
        fill("grey");
      } else if (matrix[y][x] == 5) {
        fill("pink");
        if (weath == "winter") {
          fill("white");
        }
      }
      rect(x * side, y * side, side, side);
    }
  }
}

socket.on("send matrix", nkarel);
