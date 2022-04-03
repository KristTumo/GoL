let matrix = [
    [2, 2, 1, 2, 1, 0, 1],
    [1, 2, 1, 0, 1, 1, 1],
    [1, 0, 2, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1],
    [1, 2, 1, 0, 1, 1, 1],
    [1, 0, 2, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 1],
    [1, 2, 1, 0, 1, 1, 1],
    [1, 0, 2, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1],
    [1, 2, 1, 0, 1, 1, 1],
    [1, 0, 2, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1]
]
io.sockets.emit('send matrix', matrix)


let grassArr = []
let grassEaterArr = []
let gishatichArr = []
let posArr = []
let flowerArr = []
for (let y = 0; y < 30; y++) {
    matrix[y] = [];
    for (let x = 0; x < 30; x++) {
        let num = Math.round(Math.random() * 0);
        matrix[y].push(num);
    }
}

function setup() {
    frameRate(8)
    createCanvas(50 * 10);
    background("blue");

    new Grass(13, 13)
    new GrassEater(5, 14)
    new Gishatich(13, 18)
    new Pos(8, 8)
    new Pos(20, 18)
    new Flower(21, 20)
}
console.log(matrix);

function drawMatrix(matrix) {
    fill("white");
    for (let y = 0; y < 30; y++) {
        for (let x = 0; x < 30; x++) {
            if (matrix[y][x] == 0) {
                fill("white")
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("grey");
            }
            else if (matrix[y][x] == 5) {
                fill("pink")
            }
            rect(x * 25, y * 25, 25, 25);
        }
    io.sockets.emit('send matrix', matrix)

    }



    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].start()
    }
    for (let i in gishatichArr) {
        gishatichArr[i].start()
    }
    // for(let i in posArr)
    // {
    //     posArr[i].chooseCell()
    // }
    for (let i in flowerArr) {
        flowerArr[i].mul()
    }
    io.sockets.emit('send matrix', matrix)
}
