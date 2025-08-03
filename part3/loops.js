// let sum=0;
// let i=0;
//  while(i<5){
//     sum+=i;
//     i++;
//  }console.log(sum); //output: 10

//  let i=5;
//  let countdown=[];
//  while(i>0){
//     countdown.push(i);
//     i--;
//  }console.log(countdown); //output: [5, 4, 3, 2, 1]
     

    // let tea=[];
    // let userInput = prompt("Enter your fav tea:");
    // while(userInput!=="stop"){
    //     tea.push(userInput);
    // }console.log(tea); //output: array of favorite teas     


//     let total=0;
//     let i=0;
//     do{
//         total+=i;
//         i++;
//      }
//     while(i<=3)
        
//  console.log(total); //output: 6


  
// let multipliedNumbers = [];
// let numbers=[2,4,6,8,10];
// for(let i=0;i<numbers.length;i++){
//     multipliedNumbers.push(numbers[i] * 2);
// }console.log(multipliedNumbers); // output: [4, 8, 12, 16, 20] 

// let arr=["green tea","tea", "black tea", "oolong tea"];
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]=="black tea"){
        
//         break;
//     }let selectedTea=arr[i];
//     console.log(selectedTea);
// }

// let cities=["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// let visitedCities=[];
// for(let i=0;i<cities.length;i++){
//     if(cities[i]==="Chicago"){
//         continue;
//     }
//     visitedCities.push(cities[i]);
// } console.log(visitedCities);

// let cityPopulation={
//     "london": 890000,
//     "New York":892000,
//     "Paris": 3829239,
//     "Berlin":3838838
// };
// let cityPopulations={};
// for(const city in cityPopulation){
//     if(city== "Berlin"  ){
//         break;
//     }
//     cityPopulations[city]=cityPopulation[city];  
//     console.log(cityPopulation[city]) ;
// }
// for(let i=0;i<=cityPopulation;i++){
//     if(cityPopulation[i]=="Berlin"){
//         cityPopulations.push_back(cityPopulation[i]);
//     }console.log(cityPopulations);
// }


//FOR EACH LOOP
// let teaCollection=["earl grey","green tea","chai","oolong tea"];
// let availaibleTeas=[];
// teaCollection.forEach(function(tea){
//      if(tea==="chai"){
//         return;
//      }availaibleTeas.push(tea);
// });console.log(availaibleTeas);

// let cities=["berlin","tokyo","sydney","paris"];
// let travelledCities=[];
// cities.forEach(function(city)  {
//     if(city==="sydney"){
//         return;
//     }travelledCities.push(city);
// });console.log(travelledCities);

// let number=[2,4,6,8,9];
// let doubledNumbers=[];
// for(let i=0;i<number.length;i++){
//     if(number[i]===8){
//         continue;
//     }doubledNumbers.push(number[i]*2);
// }console.log(doubledNumbers);

let arr=["chai","green tea", "black tea","jasmine tea","herbal tea"];
let shortTeas=[];
for(let i=0;i<arr.length;i++){
    if(arr.length[i]>10){
        shortTeas.push(arr[i]);
    }console.log(shortTeas);
}