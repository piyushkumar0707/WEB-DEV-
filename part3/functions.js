// function greet(name){
//     console.log(`hello ${name}`);
// }
// greet("aiyush");


//  function orderTea(teaType){
//  function confirmOrder (){
//      return `order confirmed for ${teaType}`;
//  }return confirmOrder()
//  }
//  let confirmationOrder= orderTea("emon");
//  console.log(confirmationOrder);

// function makeTea(typeofTea){
//     return `maketea: ${typeofTea}`;
// }
// function processTeaOrder(teaFunction){
//     function teaFunction("earl grey"){
        
//     }
//     let order=processTeaOrder(makeTea);
//     console.log(order);
// }

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker= createTeaMaker();
console.log(teaMaker("green tea"));