// let car={
//     make: "toyota",
//     mode:"camry",
//     year: 2020,
//     start: function(){
//         return `${this.make} car got started in ${this.year}`;
//     },
// };
// console.log(car.start());

// function Person(name, age){
//     this.name=name
//     this.age=age
// }

// let john=new Person("john",20)
// console.log(john.name);

// function Animal(type){
//     this.type= type
// }
// Animal.prototype.speak= function(){
//     return `${this.type} makes a sound`
// }

// Array.prototype.hitesh= function(){
//     return `Custom method ${this}`
// }
// let myArray=[1,2,3]
// console.log(myArray.hitesh());
// let myNewArray=[1,2,3,4,5,6];
// console.log(myNewArray.hitesh());


// class Vehicle{
//     constructor(make, model){
//         this.make=make
//         this.model=model
//     }
//     start(){
//         return `${this.model} is a car from ${this.make}`; 
//     }
// }

// class Car extends Vehicle{
//     drive(){
//         return `${this.make}: This is an inheritance example`;

//     }
// }
// let myCar= new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

// let vehOne= new Vehicle("Toyota","Corolla");
// console.log(vehOne.make);


// //Encapsulation

// class BankAccount{
//     #balance=0;
//     deposit(amount){
//         this.#balance+= amount;
//         return this.#balance;
//     }
//     getBalance(){
//         return `${this.#balance}`;
//     }
// }
// let account= new BankAccount();
// console.log(account.getBalance);


// // ABSTRACTION

// class CoffeeMachine{
//     start(){
//         //call Db
//         // filter value
//         return `starting the machine...`
//     }
//     brewCoffee(){
//         //complete calculation
//         return`Brewing Coffee`;
//     }
// pressStartButton(){
//    let msgone= this.start()
//    let msgTwo= this.brewCoffee();
//    return `${msgone}+${msgTwo}`;
// }
// }
// let myMachine= new CoffeeMachine()
// // console.log(myMachine.start());
// // console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// // Polymorphism

// class Bird {
//     fly(){
//         return `Flying....`
//     }
// }
// class Penguin extends Bird{
//     fly(){
//        return `Penguins can't fly` ;
//     }
//     }


// let bird= new Bird();
// let penguin= new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


// // static method

// class Calculator{
//     static add(a,b){
//         return a+b
//     }
// }

// // let miniCalc= new Calculator();
// // console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));


// // Getters and Setters

// class Employee{
//     #salary;
//     constructor(name, salary){
//         if(salary<0){
//             throw new Error("Salary cannot be in negative");
//         }
//         this.name= name
//         this.#salary= salary
//     }
//     get salary(){
//         return `You are not allowed to see the salary`;
//     }

//     set salary(value){
//         if(value<0){
//             console.log("invalid salary");
//         }else{
//             this._salary= value;
//         }
//     }
// }
// let emp= new Employee("Alice",50000);
// console.log(emp._salary);
// emp.salary= 60000;


// // Functional Constructor and Errors
// // Task 1: Create a Functional Constructor

// // Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



// // Task 2: Handle Errors

// // Modify the Person constructor to throw an error if the age is not a positive number.
// function Person(name, age) {
//     if(age<0){
//         throw new Error("Age must be a positive number");
//     }
    
//     this.name=name;
//     this.age=age;
//     this.greet=function(){
//         return `Hello, my name is ${this.name}`;
//     };
// }
// // const p1 = new Person( 30,'Alice');
// // console.log(p1.greet()); // Output: Hello, my name is Alice


// // Classes, Objects, and Inheritance
// // Task 1: Class Inheritance

// // Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".



// // Task 2: Method Overriding in Inheritance

// // Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".



// // Task 3: Static Methods in Classes

// // Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getDetails() {
//     return `Make: ${this.make}, Model: ${this.model}`;
    
//   }move(){
//       return `The vehicle is moving`;
// }
//     static isVehicle(obj) {
//     return obj instanceof Vehicle;
//   }

// }

// class Car extends Vehicle {
//   startEngine() {
//     return `Engine started`;
//   }
//   move(){
//       return `The car is driving`;
//   }
// }



// // Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



// // Task 2: Polymorphism with Method Overriding

// // Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
// // Task 1
// class BankAccount {
//   constructor(balance = 0) {
//       if(balance<0) {
//           throw new Error("balance cant be negative") 
//       }
//     this._balance = balance;
//   }
//   get balance(){
//       return this._balance;
//   }
//   set balance(amount){
//       if(amount<0){
//          throw new Error("Balance cannot be negative");
//       } this._balance=amount;
//   }
//   deposit(amount){
//       if(amount<0){
//           throw new Error("amount cant be negative");
//       }else{
//           this.balance+=amount;
//       }
//   }
//   withdraw(amount){
//       if(amount<0){
//           throw new Error("amount cant be negative");
//       }else if(amount>this.balance){
//           throw new Error("Insufficient funds");
//       } this.balance-=amount;
//   }
// }

// // Task 2
// class Shape {
//     area(){
        
//         return 0 ;
//     }
// }

// class Circle extends Shape{
//     constructor(radius){
//         super();
//         this.radius=radius;
//     }
//     area(){
        
//         return Math.PI*this.radius*this.radius ;
//     }
// }

// class Rectangle extends Shape {
//     constructor(length, breadth){
//         super();
//         this.length= length;
//         this.breadth= breadth;
//     }
//      area(){
//         return this.length *this.breadth;
//     }
// }


// const boxPrototype = {
//   getValue() {
//     return this.value;
//   },
// };

// const boxes = [
//   { value: 1, __proto__: boxPrototype },
//   { value: 2, __proto__: boxPrototype },
//   { value: 3, __proto__: boxPrototype },
// ];


// A constructor function
function Box(value) {
  this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];

console.log(boxes)
