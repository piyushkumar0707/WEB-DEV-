const person={
    name: "Hitesh",
    greet(){
        console.log(`hi, I am ${this.name}`);
    },
};
person.greet();

const greetFunction= person.greet
greetFunction()

const boundGreet= person.greet.bind({name: "john"});
boundGreet();

//bind, call and apply

