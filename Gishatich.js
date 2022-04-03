let LivingCreature = require("./LivingCreature");

// Grass մոդուլը էքսպորտ ենք անում
module.exports = class Gishatich extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 1;
  }
  updateDirection() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }

  chooseCell(n) {
    this.updateDirection();
    return super.chooseCell(n);
  }
  start() {
    if (this.chooseCell(2).length > 0) {
      this.eat();
    } else if (this.chooseCell(4).length > 0) {
      this.eat();
    } else if (this.chooseCell(5).length > 0) {
      this.eat();
    } else if (this.chooseCell(0).length > 0) {
      this.move();
    }
    if (this.energy <= 0) {
      this.die();
    }
    if (this.energy > 21) {
      this.mul();
    }
  }
  mul() {
    let found = this.chooseCell(0);
    let exact = found[Math.floor(Math.random() * found.length)];
    if (exact && this.energy > 21) {
      let x = exact[0];
      let y = exact[1];
      new Gishatich(x, y);
      this.energy = 11;
    }
  }
  eat() {
    this.energy += 2;
    let found = this.chooseCell(2);
    let exact = found[Math.floor(Math.random() * found.length)];
    let found1 = this.chooseCell(4);
    let exact1 = found1[Math.floor(Math.random() * found1.length)];
    let found2 = this.chooseCell(5);
    let exact2 = found2[Math.floor(Math.random() * found2.length)];
    if (exact) {
      let x = exact[0];
      let y = exact[1];
      for (let i = 0; i < grassEaterArr.length; i++) {
        if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
          grassEaterArr.splice(i, 1);
        }
      }

      matrix[y][x] = 3;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
    } else if (exact2) {
      let x = exact2[0];
      let y = exact2[1];
      for (let i = 0; i < flowerArr.length; i++) {
        if (flowerArr[i].x == x && flowerArr[i].y == y) {
          flowerArr.splice(i, 1);
        }
      }

      matrix[y][x] = 3;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
    } else if (exact1) {
      this.die();
    }
  }

  move() {
    let found = this.chooseCell(0);
    let exact = found[Math.floor(Math.random() * found.length)];
    if (exact) {
      let x = exact[0];
      let y = exact[1];
      matrix[y][x] = 3;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      this.energy -= 1;
    }
  }

  die() {
    matrix[this.y][this.x] = 0;
    for (let i = 0; i < gishatichArr.length; i++) {
      if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
        gishatichArr.splice(i, 1);
      }
    }
  }
};
