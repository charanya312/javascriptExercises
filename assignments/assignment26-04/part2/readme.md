1.for first function it gets error undefined.this inside the setTimeout callback does not refer to the user object. refers to global so shows undefined.settimeout calls it back so it not point to user.
A classic move or arrow function solved it.
2.storing this in variable:
   const userFixed = {
  name: "Alice",
  greetDelayed: function() {
    const self = this;
    setTimeout(function() {
      console.log(`Hello, ${self.name}!`);
    }, 1000);
  }
};
by storing in a function we capture correct content before entered.
3.why arrow function works:
const userArrow = {
  name: "Bob",
  greetDelayed: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};not have their own this it inherit scope of others in this it use function scope.
4.Create, break, and fix with arrow functions
const car = {
  brand: "Toyota",
  announce: function() {
    setTimeout(function() {
      console.log(`Car brand is ${this.brand}`);
    }, 1000);
  }
};

car.announce(); // Outputs: Car brand is undefined
fixed version 
const carFixed = {
  brand: "Toyota",
  announce: function() {
    setTimeout(() => {
      console.log(`Car brand is ${this.brand}`);
    }, 1000);
  }
};

carFixed.announce(); // Outputs: Car brand is Toyota
