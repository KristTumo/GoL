let LivingCreature = require("./LivingCreature");

// Grass մոդուլը էքսպորտ ենք անում
module.exports = class GrassEater extends LivingCreature {
  constructor(x, y) {
    super(x, y);
    this.energy = 9;
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
    if (this.chooseCell(1).length > 0) {
      this.eat();
    } else if (this.chooseCell(4).length > 0) {
      this.eat();
    } else if (this.chooseCell(0).length > 0) {
      this.move();
    }
    if (this.energy <= 0) {
      this.die();
    }
    if (this.energy > 20) {
      this.mul();
    }
  }
  mul() {
    let found = this.chooseCell(0); // [[], [], []]
    let exact = found[Math.floor(Math.random() * found.length)];
    if (exact && this.energy > 20) {
      let x = exact[0];
      let y = exact[1];
      new GrassEater(x, y);
      this.energy = 10;
    }
  }
  eat() {
    this.energy += 2;
    let found = this.chooseCell(1);
    let exact = found[Math.floor(Math.random() * found.length)];

    let found1 = this.chooseCell(4);
    let exact1 = found1[Math.floor(Math.random() * found1.length)];
    if (exact) {
      let x = exact[0];
      let y = exact[1];
      for (let i = 0; i < grassArr.length; i++) {
        if (grassArr[i].x == x && grassArr[i].y == y) {
          grassArr.splice(i, 1);
        }
      }

      matrix[y][x] = 2;
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
      matrix[y][x] = 2;
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      this.energy -= 1;
    }
  }

  die() {
    for (let i = 0; i < grassEaterArr.length; i++) {
      if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
        grassEaterArr.splice(i, 1);
      }
    }
    matrix[this.y][this.x] = 0;
  }
};
