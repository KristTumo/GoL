let LivingCreature = require("./LivingCreature");

// Grass մոդուլը էքսպորտ ենք անում
module.exports = class Pos extends LivingCreature {
  constructor(x, y) {
    super(x, y);
  }
};
