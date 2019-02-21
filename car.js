class Vehicle {
  constructor(name, fuel) {
       console.log(`I'm ${name}`)
       this.x = 0;
       this.y = 0;
       this.step = 1;
       this.name = name;
       this.fuel = fuel;
   }
   
   getCoords() {
       return `(${this.x}, ${this.y})`;
   }
 
   getFuel() {
       return `The fuel is ${this.fuel}`;
   }
 
   useFuel() {
       this.fuel = this.fuel - this.step;
   }

   canMove() {
       return this.fuel > 0
   }

   moveForward() {
      if (!this.canMove()) return "can't move, there is no fuel"
      this.useFuel();
      this.x = this.x + this.step;
      return `Forward: ${this.getCoords()} ${this.getFuel()}`;
   }
 
   moveBack() {
      if (!this.canMove()) return "can't move, there is no fuel"
     	this.useFuel();
      this.x = this.x - this.step;
      return `Back: ${this.getCoords()} ${this.getFuel()}`;
   }
 }
 
class Car extends Vehicle {
  constructor(name, fuel){
    super(name, fuel)

    this.nitro = false;
  }
  turnOnNitro() {
    if (!this.canMove()) return "can't use nitro, there is no fuel"
    this.nitro = true
    this.step = 2;
    return `Nitro is turned on and step is ${this.step}`;
  }
  turnOffNitro() {
    if (!this.canMove()) return "can't use nitro, there is no fuel"
    this.nitro = false
    this.step = 1;
    return `Nitro is turned of and step is ${this.step}`;
  }
  moveLeft() {
    if (!this.canMove()) return "can't move, there is no fuel"
    this.useFuel();
    this.y = this.y + this.step;
    return `Left: ${this.getCoords()} ${this.getFuel()}`;
  }
  moveRight() {
    if (!this.canMove()) return "can't move, there is no fuel"
    this.useFuel();
    this.y = this.y - this.step;
    return `Right: ${this.getCoords()} ${this.getFuel()}`;
  }
}

const c = new Car('Porshe', 10);


// test
console.log(c.moveRight())
console.log(c.moveRight())
console.log(c.turnOnNitro())
console.log(c.moveForward())
console.log(c.moveForward())
console.log(c.moveForward())
console.log(c.turnOnNitro())
console.log(c.moveForward())
console.log(c.moveRight())