//Task 1: Create Inheritance Using Prototypes

// Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()
// Task 1
// Parent constructor
function Animal(name) {
  this.name = name;
}

// Method on Animal's prototype
Animal.prototype.makeSound = function () {
  return `Animal sound`;
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
  return `Woof!`;
};




//Task 2: Shape and Rectangle Inheritance

// Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

// Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.

// Parent constructor
function Shape(color) {
  this.color = color;
}

// Method on Shape's prototype
Shape.prototype.getColor = function () {
  return this.color;
};

// Child constructor
function Rectangle(width, height, color) {
  Shape.call(this, color); // Call parent constructor
  this.width = width;
  this.height = height;
}

// Inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Add Rectangle-specific method
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};