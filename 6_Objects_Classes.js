// Lab JS: Objects and classes

// let obj = { name: 'Petar', age: 20};
// console.log(obj.name);

// let person = { name: "Petar", age: 20, hairColor: "black" };
// console.log(person.age);

// let person = {};
// person.name = "Stephan";
// person["lastName"] = "Andreev";
// console.log(person);



// let person = {
//   sayHello: function () {
//     console.log("Hi guys");
//   }
// }
// console.log(person);

// let person = { name: "Petar", age: 20, hairColor: "black" };
// person.sayHello = () => console.log(('Hi, guys'));

// let cat = { name: "Tom", age: 5 };
// Object.entries(cat);
// console.log(Object.entries(cat));
// console.log(Object.keys(cat));
// console.log(Object.values(cat));

//     let cat = {
//     name: "Navcho",
//     age: 5, 
//     breed: 'Percian',
//     makeSound: function(){
//         console.log('Meow');
//     }      
// }
// cat.makeSound();

// let obj = { name: "Peter", age: "18", grade: "5.50" };
// for (let key in obj) {
//   console.log(`${key}: ${obj[key]}`);
// }

// let person1 = { firstName: "Jack", lastName: "Sparrow", age: "49" };
// let person2 = { firstName: "Alan", lastName: "Rickman", age: "69" };
// for (let key in person2) {
// //   console.log(key); //firstName, lastName, age
// //   console.log(person2[key]); //Alan, Rickman, 69
// }
// for (let key in person1) {
//   console.log(`${key} : ${person1[key]}`);
// }

// let obj = {name: 'Sofia', area: '492', population: '1238438', country: 'Bulgaria', postCode: '1000'};
// for(let key in obj){
//     console.log(`${key} -> ${obj[key]}`);
// }

// let city = {name: 'Sofia', area: '492', population: '1238438', country: 'Bulgaria', postCode: '1000'};
// let entries = Object.entries(city);
// for(let[key, value] of entries){
//     console.log(`${key} -> ${value}`);
// }

// let cat = {
//   name: "Navcho",
//   age: 5,
//   breed: "Persian",
//   makeSound() {
//     console.log("Meow");
//   },
// };

// for (let prop in cat) {
//   console.log(cat[prop]);
// }
// cat.makeSound();

// console.log(Object.keys(cat));
// console.log(Object.values(cat));
// console.log(Object.entries(cat));
//-------------------------------------------
// stack & heap
// let a = 10;
// let b = 'abc';
// let c = a;
// let d = b;

// console.log(a, b, c, d);

// let person = {name: 'Pesho'};
// let otherPerson = person;
// otherPerson.name = 'Gosho';
// console.log(person);
// console.log(otherPerson);
//--------------------------------------------
// spread & rest operators

// let numbers = [1, 2, 3];
// let otherNum = numbers;
// console.log(numbers);
// console.log(otherNum);

// otherNum[0] = 100;
// console.log(numbers);
// console.log(otherNum);

// let otherNum = numbers.slice();
// console.log(numbers);
// console.log(otherNum);

// let otherNum = [...numbers];
// otherNum[0] = 100;
// console.log(numbers);
// console.log(otherNum);

// let numbers = [1, 2, 3];
// function solve(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// // solve(numbers[0], numbers[1], numbers[2]);
// solve(...numbers); // spread operator

// let numbers = [1, 2, 3];
// function solve(...numbers) {
//   console.log(numbers);
// }
// // solve(numbers[0], numbers[1], numbers[2]);
// solve(1, 2, 3, 4, 5); // rest operator
//---------------------------------------------
// клониране на обекти
// let person = {name:'Pesho', age: 30};
// let clonedPerson = person;
// clonedPerson.name = 'Gosho';
// console.log(person);
// console.log(clonedPerson);

// let person = { name: "Pesho", age: 30 };
// let clonedPerson = { ...person }; // със спред оператор се клонира обекта
// clonedPerson.name = "Gosho";
// console.log(person);
// console.log(clonedPerson);
// ---------------------------------------------
// let numbers = [1, 2, 3, 4, 5];

// // let [firstNum, secondNum] = numbers;
// let [firstNum, secondNum, ...rest] = numbers;

// console.log(firstNum); // 1
// console.log(secondNum); // 2
// console.log(rest); // [ 3, 4, 5 ]

// let first = 1;
// let second = 2;
// [second, first] = [first, second];
// console.log(first);
// console.log(second);

// let person = { name: "Pesho", age: 30 };
// let { age, name } = person;

// console.log(age);
// console.log(fullName);
// ---------------------------------------------
// function fillCup(cupArg) {
//   cupArg.filled++;
//   console.log(`cup arg: ${cupArg.filled}`);
// }
// let cup = {filled: 0};
// fillCup(cup);
// console.log(`original cup: ${cup.filled}`);
// ================================================================
// let person = {
//     name:'Pesho',
//     age: 30,
//     isChild: false
// };
// console.log(person);
// console.log(JSON.stringify(person));
// let personString = (JSON.stringify(person));
// console.log(typeof personString);
// console.log(typeof person);

// let originalPerson = JSON.parse(personString);
// console.log(personString);

// let item = "flour";
// let quantity = 15;

// // let result = { [item]: quantity };  // или
// let result = {};
// result[item] = quantity;

// console.log(result);
// ---------------------------------------------
// class Student{
//   constructor(name, grade){
//     this.name = name;
//     this.grade = grade;
//   }
// }
// let student = new Student('Petar', 5.50);
// let student1 = new Student('Gosho', 6.00);
// console.log(student);
// console.log(student1);

// class Dog{
//   constructor(){
//     this.speak = () => console.log('Woof');
//   };
// }
// let dog = new Dog();
// dog.speak();

// class Cat {
//     constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;  
//     this.makeSound = ()=> console.log('Meow');
//   };
// }
// let firstCat = new Cat("Pesho", "Angora");
// let secondCat = new Cat("Navsho", "Persian");
// let thirdCat = new Cat("Timmy", "Siam");
// firstCat.makeSound();

// console.log(firstCat);
// console.log(secondCat);
// console.log(thirdCat);

// Задачи от лекцията:
// 1 ******************************************************
// function personInfo(firstName, lastName, age) {
//  let person = {firstName, lastName, age};
//  for(let key in person){
//      console.log(`${key}: ${person[key]}`);     
//  }
//   }
//   personInfo("Peter", "Pan", '20');
// 2 *******************************************************
// function city(name, area, population, country, postCode){
//     let city = { name, area, population, country, postCode};
//     let obj = Object.entries(city);
//     for(let [key, value] of obj){
//         console.log(`${key} -> ${value}`);        
//     }
// }
// city("Sofia", "492", "1238438", "Bulgaria", "1000");
// 3 *********************************************************
// function convertToObject(json) {
//   let person = JSON.parse(json);
//   let entries = Object.entries(person);
//   for (let [key, value] of entries) {
//     console.log(`${key}: ${value}`);
//   }
// }
// convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
// 4 *************************************************************
// function convertToJSON(name, lastName, hairColor) {
//   let person = { name, lastName, hairColor };
//   console.log(JSON.stringify(person));
// }
// convertToJSON("George", "Jones", "Brown");
// 5 ************************************************************
// function cAT(arr) {
//   class Cat {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     meow() {
//       console.log(`${this.name}, age ${this.age} says Meow`);
//     }
//   }
//   let cats = [];
//   for (let i = 0; i < arr.length; i++) {
//     let catData = arr[i].split(" ");
//     let [name, age] = [catData[0], catData[1]];
//     let cat = new Cat(name, age);

//     cats.push(cat);
//     // cat.meow();
//   }
//   for(let cat of cats){
//     cat.meow();
//   }
// }
// cAT(["Mellow 2", "Tom 5"]);
// 6 *********************************************
// function songS(input){
//   class Song{
//     constructor(type, name, time){
//       this.type = type;
//       this.name = name;
//       this.time = time;
//     }
//   }
//   let songs = [];
//   let numberOfSongs = input.shift();
//   let typeSong = input.pop();

//   for(let i = 0; i < numberOfSongs; i++){
//     let [type, name, time] = input[i].split('_');
//     let song = new Song(type, name, time);
//     songs.push(song);
//   }
//   if(typeSong === "all"){
//     songs.forEach((x) => console.log(x.name));
//   } else {
//     let filtered = songs.filter((x) => x.type === typeSong);
//     filtered.forEach((x) => console.log(x.name));
//   }
// }
// songS([
//   '3',
//   'favourite_DownTown_3:14',
//   'favourite_Kiss_4:16',
//   'favourite_Smooth Criminal_4:01',
//   'favourite']);
// ******************************************************
// ======================================================
// Задачи от упражнението:
// ======================================================
// 1 ******************************************************
// function solve(input) {
//   let employees = {};
//   input.forEach((name) => {
//     employees[name] = name.length;
//   });
//   // console.log(employees);
//   for (let name in employees) {
//     console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
//   }
// }
// solve([
//   "Silas Butler",
//   "Adnaan Buckley",
//   "Juan Peterson",
//   "Brendan Villarreal",
// ]);
// 2 ************************************************************
// function solve(input) {
//   input.forEach((line) => {
//     // console.log(line);
//     const arr = line.split(" | ");
//     let city = {
//       town: arr[0],
//       latitude: Number(arr[1]).toFixed(2),
//       longitude: Number(arr[2]).toFixed(2),
//     };
//     console.log(city);
//   });
// }
// solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
// 3 *************************************************************
// function solve(stock, ordered){
//   const products = {};
//   stock.forEach((el, i) => {
//       // for(let i = 0; i < stock.length; i+=2){
//     //   const product = stock[i];
//     //   const quantity = stock[i+1];
//     // }  
//     if(i % 2 === 0){
//       const product = stock[i];
//       const quantity = Number(stock[i + 1]);
//       products[product] = quantity; 
//     }
//   });
// // console.log(products);
//   for(let i = 0; i < ordered.length; i+=2){
//     const product = ordered[i];
//     const quantity = Number(ordered[i + 1]);
//     if(products[product] === undefined){
//       products[product] = 0;
//     }
//     products[product] += quantity;
//   };
//   for (const product in products){
//     console.log(`${product} -> ${products[product]}`);    
//   }   
// }
// solve([
//   'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//   ],
//   [
//   'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//   ]
//   );
// 4 *******************************************************
// function solve(input){
//   let movies = [];

//   input.forEach(line => {
//     const tokens = line.split(' ');
//     const addIndex = tokens.indexOf('addMovie');
//     const directorIndex = tokens.indexOf('directedBy');
//     const dateIndex = tokens.indexOf('onDate');

//     if(addIndex > -1 ){
//       movies.push({name: tokens.slice(addIndex + 1).join(' ')}) 
//     }
//     if(directorIndex > -1 ){
//       const name = tokens.slice(0, directorIndex).join(' ');
//       const director = tokens.slice(directorIndex+1).join(' ');

//       movies.forEach(movie => {
//         if(movie.name === name){
//           movie.director = director;
//         }
//       })      
//     }
//     if(dateIndex > -1){
//       const name = tokens.slice(0, dateIndex).join(' ');
//       const date = tokens.slice(dateIndex + 1).join(' ');

//       movies.forEach(movie => {
//         if(movie.name === name){
//           movie.date = date;
//         }
//       })
//     }  
//   })
//   movies.forEach(movie => {
//     if(movie.name !== undefined && movie.director !== undefined && movie.date !== undefined){
//       console.log(JSON.stringify(movie))     
//       }
//     })
// }
// solve([
//   'addMovie Fast and Furious',
//   'addMovie Godfather',
//   'Inception directedBy Christopher Nolan',
//   'Godfather directedBy Francis Ford Coppola',
//   'Godfather onDate 29.07.2018',
//   'Fast and Furious onDate 30.07.2018',
//   'Batman onDate 01.08.2018',
//   'Fast and Furious directedBy Rob Cohen'
//   ]
//   );
// 5 *******************************************************
// function solve(input){
//     const heroes = []; 
    
//   input.forEach(line => {
//     const tokens = line.split(' / ');
//     const name = tokens[0];
//     const level = Number(tokens[1]);
//     const items = tokens[2].split(', ').sort((a, b) => a.localeCompare(b))

//     heroes.push({name, level, items});
//   });  
// //   console.log(heroes);
  
// heroes.sort((a, b) => a.level - b.level);
// heroes.forEach(hero => {
//     console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);    
// });
// }
// solve([
//     "Isacc / 25 / Apple, GravityGun",
//     "Derek / 12 / BarrelVest, DestructionSword",
//     "Hes / 1 / Desolator, Sentinel, Antara"
//     ]
//     );
// 6 *******************************************************

// 7 *******************************************************
// class Vehicle {
//   constructor(type, model, parts, fuel) {
//     this.type = type;
//     this.model = model;
//     this.parts = parts;
//     this.parts.quality = parts.engine * parts.power;
//     this.fuel = fuel;
//   }
//   drive(fuelLoss) {
//     this.fuel -= fuelLoss;
//   }
// }
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle("a", "b", parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);
// *********************************************************
// Упражняване на обекти 
// function solve(firstName, lastName, age){
//      let person = {firstName, lastName, age};
//      for(let key in person){
//         console.log(`${key}: ${person[key]}`);
//      }     
//  }
//  solve('Peter', 'Pan', '20');

// function solve(name, area, population, country, postCode){
//     let city = {name, area, population, country, postCode};
//     let entries = Object.entries(city);
//     for(let [key, value]  of entries){
//         console.log(`${key} -> ${value}`);        
//     }
// }
// solve('Sofia', '492', '1238438', 'Bulgaria', '1000');

// function solve(json){
//    let obj = JSON.parse(json);
     
//    let entries = Object.entries(obj);     
//    for(let [key, value] of entries){       
//        console.log(`${key}: ${value}`);       
//    }   
// }
// solve('{"name": "George", "age": 40, "town": "Sofia"}');

// function solve(name, lastName, hairColor){
//     let obj = {name, lastName, hairColor}
//     let person = JSON.stringify(obj);    
//         console.log(person);
//     }
// solve('George', 'Jones', 'Brown');

// function solve(arr){
//     class Cat{
//         constructor(name, age){
//             this.name = name;
//             this.age = age;
//             this.sound = () => console.log(`${this.name}, age ${this.age} says Meow`);

//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         let [name, age] =arr[i].split(' ');
//         let cat = new Cat(name, age);
//         cat.sound();
//     }
// }
// solve([ 'Mellow 2', 'Tom 5' ]);

// function solve(arr){
//     // console.log(arr);
//     class Songs{
//         constructor(type, name, time){
//             this.type = type;
//             this.name = name;
//             this.time = time;
//         }
//     }
//     let songs = [];
//     let firstStr = arr.shift();
//     let lastStr = arr.pop();
//     for(let i = 0; i < arr.length; i++){
//         let [type, name, time] = arr[i].split('_');
//         let song = new Songs(type, name, time)
//         songs.push(song);
//     }    
// // console.log(songs);
//     if(lastStr === 'all'){
//         songs.forEach((x) => console.log(x.name));    
//     } else {
//         let filtered = songs.filter((x) => x.type === lastStr);
//         filtered.forEach((x) => console.log(x.name));
//     }
// }
// solve([
//     '3',
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite'
//   ]
//   );

// function solve(input){
//     let person = {};
//     input.forEach((x) => {
//         person[x] = x.length;
//     });
//     for(let name in person){
//         console.log(`Name: ${name} -- Personal Number: ${person[name]}`);
//     }
// }
// solve([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//   ]
//   );

// function solve(input){    
//     input.forEach(element => {
//         let arr = element.split(' | ');
//         // console.log(arr);
//         let obj = {
//             town: arr[0],
//             latitude: Number(arr[1]).toFixed(2),
//             longitude: Number(arr[2]).toFixed(2)
//         }
//         console.log(obj);
//     });    
// }
// solve([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ]
// );

// function solve(stock, ordered){
//   const products = {};
//   stock.forEach((el, i) => {
//       // for(let i = 0; i < stock.length; i+=2){
//     //   const product = stock[i];
//     //   const quantity = stock[i+1];
//     // }  
//     if(i % 2 === 0){
//       const product = stock[i];
//       const quantity = Number(stock[i + 1]);
//       products[product] = quantity; 
//     }
//   });
// // console.log(products);
//   for(let i = 0; i < ordered.length; i+=2){
//     const product = ordered[i];
//     const quantity = Number(ordered[i + 1]);
//     if(products[product] === undefined){
//       products[product] = 0;
//     }
//     products[product] += quantity;
//   };
//   for (const product in products){
//     console.log(`${product} -> ${products[product]}`);    
//   }   
// }
// solve([
//   'Chips',    '5',
//   'CocaCola', '9',
//   'Bananas',  '14',
//   'Pasta',    '4',
//   'Beer',     '2'
// ] [
//   'Flour',    '44',
//   'Oil',      '12',
//   'Pasta',    '7',
//   'Tomatoes', '70',
//   'Bananas',  '30'
// ]
// );

// function solve(input){
//   let movies = [];
//   for(let i = 0; i < input.length; i++){
//     let arr = input[i].split(' ');
//     let addIndex = arr.indexOf('addMovie');
//     let directorIndex = arr.indexOf('directedBy');
//     let dateIndex = arr.indexOf('onDate');

//     if(addIndex >= 0 && addIndex < arr.length){
//       let name = arr.slice(addIndex + 1).join(' ')
//       movies.push({name});
//     }    
//     if(directorIndex >= 0 && directorIndex < arr.length){
//       let name = arr.slice(0, directorIndex).join(' ');
//       let director = arr.slice(directorIndex + 1).join(' ');
//       movies.forEach(movie => {
//       if(movie.name === name){
//         movie.director = director;           
//         }
//       });
//     }
//     if(dateIndex >= 0 && dateIndex < arr.length){
//       let name = arr.slice(0, dateIndex).join(' ');
//       let date = arr.slice(dateIndex + 1).join(' ');
//      movies.forEach(movie => {
//        if(movie.name === name){
//          movie.date = date;
//        }
//      });
//     }    
//   }
//   movies.forEach(movie => {
//     if(movie.name !== undefined
//       && movie.director !== undefined
//       && movie.date !== undefined){
//         console.log(JSON.stringify(movie));        
//   }
// });
// }
// solve([
//   'addMovie Fast and Furious',
//   'addMovie Godfather',
//   'Inception directedBy Christopher Nolan',
//   'Godfather directedBy Francis Ford Coppola',
//   'Godfather onDate 29.07.2018',
//   'Fast and Furious onDate 30.07.2018',
//   'Batman onDate 01.08.2018',
//   'Fast and Furious directedBy Rob Cohen'
// ]
// );

// function solve(input){
//   let heroes = [];
//   for(let i = 0; i < input.length; i++){
//     let arr = input[i].split(' / ');
//     // console.log(arr);
//     let name = arr[0];
//     let level = Number(arr[1]);
//     let items = arr[2].split(', ').sort((a, b) => a.localeCompare(b));
//       heroes.push({name, level, items});
//     }
//     // console.log(heroes);
//     heroes.sort((a, b) => a.level - b.level);
//     heroes.forEach(hero => {
//       console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);    
//     });
// }
// solve([
//   'Isacc / 25 / Apple, GravityGun',
//   'Derek / 12 / BarrelVest, DestructionSword',
//   'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// );

