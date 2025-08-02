//declare a string
let teaFlavors=["green tea", "black tea", "oolong tea", "white tea", "herbal tea"];
 teaFlavors[1];
 console.log(teaFlavors[1]);
 let favoriteTea=teaFlavors[1];
 console.log(favoriteTea);
 teaFlavors[2]="jasmine tea";
 console.log(teaFlavors[2]);
 console.log(teaFlavors);
 teaFlavors.push("chai tea");
 console.log(teaFlavors);
 teaFlavors.pop();
 let orderedTeaFlavors = teaFlavors;
 console.log(orderedTeaFlavors);
 let softCopyTeas=teaFlavors;
 console.log(softCopyTeas);

 let europeanCountries=["France", "Germany", "Italy", "Spain", "Portugal"];
 let asianCities=["Tokyo", "Beijing", "Seoul", "Bangkok", "Singapore"];
 let worldCitiees=[...europeanCountries, ...asianCities];
 console.log(worldCitiees);
 console.log(worldCitiees.length);

 let items = ["apple", "banana", "cherry"];
 let isapple = items.includes("apple");
 console.log(isapple);