let LivingCreature = require("./LivingCreature");

// Grass մոդուլը էքսպորտ ենք անում
module.exports = class Grass extends LivingCreature {
  constructor(x, y) {
    super(x, y);
  }

  mul() {
    let emptyCells = this.chooseCell(0);
    if (emptyCells.length > 0) {
      let randIndex = Math.round(Math.random() * (emptyCells.length - 1));
      let x = emptyCells[randIndex][0];
      let y = emptyCells[randIndex][1];

      matrix[y][x] = 1;
      new Grass(x, y);
    }
  }
};
