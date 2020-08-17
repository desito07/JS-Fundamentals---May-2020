// Lab JS - Arrays Advanced

// Имплементации от лаб-а
// push ===============================
// let names = ["Pesho", "Gosho", "Stamat"];
// console.log(names);

// // let newName = names.push("Mariyka"); // с променлива, но не може да принтира променливата след това
// names.push("Mariyka");
// console.log(names);

// pop ================================
// let myArr = ["one", "two", "three", "four", "five"];
// console.log(myArr);

// let lastOne = myArr.pop(); // с променлива
// myArr.pop(); // директно с масива
// console.log(myArr);
// console.log(lastOne);

// shift ==============================
// myArray = [10, 20, 30, 40, 50];
// console.log(myArray);

// let firstNum = myArray.shift();
// console.log(myArray);
// console.log(firstNum);

// unshift ===============================
// let arr = ["tupak", "glupak", "prostak", "izvratenqk"];
// console.log(arr);

// // let newMe = arr.unshift("shibanqk"); // с променлива
// arr.unshift("shibanqk");  // с метод
// console.log(arr);

// slice ==================================== не мутиращ, няма да промени оригиналния масив
// let myArr = ["one", "two", "three", "four", 'five'];
// myArr.slice(2); //  това няма да даде промяна в myArr масива ако се принтира
// console.log(myArr);

// let newMyArr = myArr.slice(2); // създава нов масив след отрязването на стария
// console.log(newMyArr);

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers);
// let newNumbers = numbers.slice(2);
// console.log(newNumbers);
// let newNewNumbers = newNumbers.slice(1, 2);
// console.log(newNewNumbers);
// let brandNew = newNewNumbers.slice(1, newNewNumbers.length - 1); // клониране на масиви
// console.log(brandNew);

// splice ==================================== мутираща функция, променя съдържанието на текущият масив!!
// let nums = [10, 20, 30, 40, 50];
// console.log(nums);
// let result = nums.splice(2, 3);
// console.log(result);
// console.log(nums);

// filter ==================================== не променя оригиналния масив, създава нов, използва се с arrow functions
// let numbers = [2, 8, 7, 3, 10];

// function isOdd(num){
//   return num % 2 !== 0;
// }
// let oddNumbers = numbers.filter(isOdd);  // let oddNumber = numbers.filter(n => n % 2 !== 0);

// console.log(numbers);
// console.log(oddNumbers);

// map ========================================= - създава се нов масив, но по някакъв показател променя елементите
// let numbers = [2, 8, 7, 3, 10];

// // let mapFunction = function(element){  // let doubleNumbers = numbers.map(e => e * 2);
// //   return element * 2;
// // }
// let doubleNumbers = numbers.map((e) => e * 2);
// // let doubleNumbers = numbers.map(mapFunction);
// console.log(numbers);
// console.log(doubleNumbers);

// sort ======================================== - сортиране на елементите по някакъв признак
// let names = ['Zdravko', 'Angel', 'boyko'];
// console.log(names);
// names.sort();
// console.log(names);

// let numbers = [9, 8, 2, 1, 5, 10];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

// let numbers = [9, 8, 2, 1, 5, 10, 20, 0, -100];
// // let compareFunction = function (a, b) {
// let compareFunction = (a, b) => b - a; //или с ароу функция // низходящ ред
//   let compareFunction = (a, b) => a - b; // или с ароу функция // във възходящ ред
//   // return b - a; // замества цялата долна проверка, много кратък вариант
//   // if (a > b) {
//   //   return 1;
//   // } else if (b > a) {
//   //   return -1;
//   // } else {
//   //   return 0;
//   // }

// console.log(numbers);
// numbers.sort(compareFunction);
// console.log(numbers);

// locale compare ===========================
// let names = ["Zdravko", "Angel", "boyko"];
// console.log(names);
// names.sort((a, b) => a.localeCompare(b));
// console.log(names);

//============================================
//  Примери от лаб-а

// let names = ["Pesho", "Gosho", "Stamat"];
// console.log(names);

// names.push("Mariyka");
// console.log(names);

// function iPush(arr, element){
//     arr[arr.length] = element;
// }
//     let names = ['Pesho', 'Gosho', 'Stamat'];
//     console.log(names);

//     iPush(names, 'Ivo');
//     console.log(names);

// let numbers = [10, 20, 30, 40];
// console.log(numbers);

// let lastNumber = numbers.pop();
// console.log(numbers);
// console.log(lastNumber);

// function me(arr){

//     lastElement = arr[arr.length - 1];

//     arr.length = arr[length - 1];
//     return lastElement;
// }
// let names  = [10, 20, 30, 50];
// console.log(names);

//  let arr = [10, 20, 30]; // условие от презентацията
//  console.log(arr);

//  let newAdd = arr.push(50);
// //  arr.push(50);
//  console.log(arr);

//  let nowPop = arr.pop();
//  console.log(arr);
//  console.log(nowPop);

// function meMe(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let firstElement = Number(arr[0]);
//     let lastElement = Number(arr[arr.length - 1]);
//     sum = firstElement + lastElement;
//   }
// return sum;
// }
// console.log(meMe(["20", "30", "40"]));

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(numbers);
// let newNumbers = numbers.slice(2);
// console.log(newNumbers);
// let newNewNumbers = newNumbers.slice(1, 2);
// console.log(newNewNumbers);

// let brandNew = newNewNumbers.slice();
// console.log(brandNew);

// let nums = [5, 10, 15, 20, 25, 30];
// let numsNew = nums.splice(0, 1, 250);
// console.log(numsNew);
// console.log(nums);
// let mid = nums.splice(2, 3);
// console.log(mid);
// console.log(nums);
// let numsNew = nums.splice(0, 1, 250);

// ===============================================
// Задачи от лаб -а

// function sumFirstAndLast(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let firstElement = Number(arr[0]);
//     let lastElement = Number(arr[arr.length - 1]);
//     sum = firstElement + lastElement;
//   }
//   return sum;
// }
// console.log(sumFirstAndLast(["20", "30", "40"]));

// function negativePositiveNumbers(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (element < 0) {
//       result.unshift(element);
//     } else {
//       result.push(element);
//     }
//   }
//  console.log(result.join('\n'));
// }
// negativePositiveNumbers([7, -2, 8, 9]);

// function firstAndLastKNumbers(arr) {
//   let k = arr.shift();

//   let firstKnumbers = arr.slice(0, k);
//   let lastKnumbers = arr.slice(arr.length - k);
//   console.log(firstKnumbers.join(" "));
//   console.log(lastKnumbers.join(" "));
// }
// firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);

// function lastKNumbersSequance(n, k) {
//   let arr = [1];
//   for (let i = 1; i < n; i++) {
//     let start = i - k;
//     if(start < 0){
//       start = 0;
//     }
//     let sum = 0;
//     let removed = arr.slice(start, i).forEach(x => sum += x);

//     arr.push(sum);
//   }
//   console.log(arr.join(" "));
// }
// lastKNumbersSequance(6, 3);

// function processOddNumbers(arr) {

//   let oddPositions = arr.filter((num, i) => i % 2 !== 0);
//   let doubledPositions = oddPositions.map((e) => e * 2);
//   let reversedPositions = doubledPositions.reverse();
//   //   // console.log(oddPositions);
//   //   // console.log(doubledPositions);
//   //   // console.log(reversedPositions);
//   return reversedPositions.join(' ');
// }
// let result = processOddNumbers([3, 0, 10, 4, 7, 3]);
// console.log(result);

// function smallestTwoNumbers(arr) {
//   let compareFunction = arr.sort((a, b) => a - b);
//   // console.log(arr);
//   let newArr = arr.splice(2);
//   // console.log(newArr);
//   console.log(arr.join(' '));
// }
// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);

// function listOfProducts(arr) {
//   let sortedArr = arr.sort();

//   for(let i = 0; i < arr.length; i++){
//     let element = arr[i];
//     console.log(`${i + 1}.${element}`);
//   }
// }
// listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

// function arrayManipulations(arr) {
//   let numbers = arr
//     .shift()
//     .split(" ")
//     .map((x) => Number(x));
//   // console.log(numbers);

//   for (let element of arr) {
//     // let [command, firstValue, secondValue] = element.split(" ");
//     let arrNew = element.split(" ");
//     let command = arrNew[0];
//     let firstValue = Number(arrNew[1]);
//     let secondValue = Number(arrNew[2]);

//     switch (command) {
//       case "Add":
//         numbers.push(firstValue);
//         break;
//       case "Remove":
//         // numbers.splice(numbers.indexof(firstValue, 1);
//         numbers = numbers.filter((x) => x !== firstValue);
//         break;
//       case "RemoveAt":
//         numbers.splice(firstValue, 1);
//         break;
//       case "Insert":
//         numbers.splice(secondValue, 0, firstValue);
//         break;
//     }
//   }
//   console.log(numbers.join(" "));
// }
// arrayManipulations([
//   "4 19 2 53 6 43",
//   "Add 3",
//   "Remove 2",
//   "RemoveAt 1",
//   "Insert 8 3",
// ]);
// =========================================================
// Exersices JS - Arrays Advanced

// function train(input) {
//   let numbers = input
//     .shift()
//     .split(" ")
//     .map((x) => Number(x));
//   //   console.log(numbers);

//   let max = Number(input.shift()); // for each wagon in the train
//   //   console.log(max);

//   for (let i = 0; i < input.length; i++) {
//     let arrNew = input[i].split(" ");
//     let command = arrNew[0];
//     let firstValue = arrNew[1];

//     // console.log(arrNew);
//     // console.log(command);
//     // console.log(firstValue);
//     if (arrNew.length === 2 && command === "Add") {
//       numbers.push(firstValue);
//     } else {
//       let passengers = Number(arrNew[0]);
//       for (let j = 0; j < numbers.length; j++) {
//         if (passengers + numbers[j] <= max) {
//           numbers[j] += passengers;
//           break;
//         }
//       }
//     }
//   }
//   console.log(numbers.join(" "));
// }
// train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);

// function distinctArray(arr) {
//   let newArr = [];
//   for (let element of arr) {
//     if (!newArr.includes(element)) {
//       newArr.push(element);
//     }
//   }
//   console.log(newArr.join(' '));
// }
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);

// function houseParty(arr) {
//   let newArr = [];

//   for (let infoLine of arr) {
//     let info = infoLine.split(" ");
//     let name = info[0];

//     if (!info.includes("not")) {
//       if (!newArr.includes(name)) {
//         newArr.push(name);
//       } else {
//         console.log(`${name} is already in the list!`);
//       }
//     } else {
//       if (newArr.includes(name)) {
//         newArr = newArr.filter((x) => x !== name);
//       } else {
//         console.log(`${name} is not in the list!`);
//       }
//     }
//   }
//   console.log(newArr.join("\n"));
// }
// houseParty([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);

// function sorting(arr) {
//   arr.sort((a, b) => a - b);
//   // console.log(arr);

//   let newArr = [];

//   for (let i = 0; i < arr.length + 6; i++) {
//     let biggestNum = arr.pop();
//     let smallestNum = arr.shift();
//     newArr.push(biggestNum, smallestNum);
//   }
//   console.log(newArr.join(" "));
// }
// sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

// function sortAnArrayBy2Criteria(arr) {
//   arr.sort(customSort);

//   console.log(arr.join('\n'));

//   function customSort(a, b) {
//     if (a.length > b.length) {
//       return 1;
//     } else if (a.length < b.length) {
//       return -1;
//     } else {
//       return a.localeCompare(b);
//     }
//   }
// }
// sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);

// function bombNumbers(arr, bombInfo) {

//   let bomb = bombInfo[0];
//   let range = bombInfo[1];  

//   let index = arr.indexOf(bomb);
//   // console.log(index);
//   while (index > -1) {
    
//     arr.splice(Math.max((index - range), 0), Math.min(range, index)); // left detonation
//     index = arr.indexOf(bomb);
//     arr.splice(index, (range + 1)); // right detonation
//     index = arr.indexOf(bomb);
//   }
//   let sum = 0;
//   for(let element of arr){
//     sum += element;
//   }
//   console.log(sum);
// }
// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);

// function searchForANumber(nums, criteria) {
//   let count = 0;
//   let el = criteria[2];
//   let arr = nums.slice(0, criteria[0]);
//   arr.splice(0, criteria[1]);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) {
//       count++;
//     }
//   }
//   console.log(`Number ${el} occurs ${count} times.`);
// }
// searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
