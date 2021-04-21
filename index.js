/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  }

Person.prototype.eat = function(foodString){
  if (this.stomach.length < 10){
    this.stomach.push(foodString);
  }
};
Person.prototype.poop = function(){
  this.stomach = [];
};
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};


const me = new Person("Ethan", 28);
for (let i = 0; i < 11; i++){
  me.eat("Pizza");
  console.log(me.stomach);
}
me.poop();
console.log(me.stomach);

console.log(me.toString());
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons){
  this.tank += gallons;
};
Car.prototype.drive = function(distance){
  if (this.tank < (distance / this.milesPerGallon)){
    this.odometer += this.milesPerGallon * this.tank;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometer}`;
  } else {
    this.tank -= (distance / this.milesPerGallon);
    this.odometer += distance;
    return null;
  }
};
const myCar = new Car("A flipping Koenigsegg", 30);
console.log(myCar);
myCar.fill(12);
console.log(myCar.tank);
console.log(myCar.drive(1000));
console.log(myCar.tank);
console.log(myCar.odometer);

  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function (){
  return `Playing with ${this.favoriteToy}`;
};
const meAsABaby = new Baby("Ethan", 1, "Teddy");
meAsABaby.eat("BabyFood");
console.log(meAsABaby);
meAsABaby.poop();
console.log(meAsABaby);
console.log(meAsABaby.toString());
console.log(meAsABaby.play());


 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. new binding is when we use the new keyword to bind this to a new object
    2. implicit binding is when we bind this to the owner of a method when we call that method
    3. explicit binding is when we bind
    4. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}
