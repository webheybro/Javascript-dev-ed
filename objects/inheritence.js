function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked !`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked !`);
};

function Dragon(life, name, level, power) {
  Enemy.call(this, life, name, level); //extend Enemy

  this.power = power;
}

Dragon.prototype = Object.create(Enemy.prototype); //extend prototypes

Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREAAATHHH !");
};

const newDragon = new Dragon(100, "bill", 6, "fire");

//console.log(newDragon);
//newDragon.block();
//newDragon.getInfo();

//LES CLASSES GENERE AUTOMATIQUEMENT LES PROPTYPES
//BETTER THAN FUNCTION FOR POO
class Enemys {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }

  getInfo = function () {
    console.log(this.life, this.name, this.level);
  };

  attack = function () {
    console.log(`${this.name} has attacked !`);
  };

  block = function () {
    console.log(`${this.name} has blocked !`);
  };
}

const turtle = new Enemys(25, "SquidleBougle", 9);

turtle.attack();

class Dragons extends Enemys {
  constructor(life, name, level, power) {
    super(life, name, level);
    this.power = power;
  }
}

const Bugs = new Dragons(25, "bugs", 9, "fire");

Bugs.getInfo();
Bugs.attack();
