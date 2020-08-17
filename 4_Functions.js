// Lab: JS Functions

// function printStars(count) {
//   console.log("*".repeat(count));
// }
// printStars(4);

// function sqrt(number) {
//   console.log(Math.sqrt(number));
// }
// sqrt(4);

// function solve(num) {
//   function printStars(count) {
//     let char = "*";

//     let stars = char.repeat(count);

//     console.log(stars);
//   }
//   let count = Math.sqrt(num);

//   printStars(count);
//   printStars(count + 2);
// }
// solve(64);

// function readFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// const fullName = readFullName("Pesho", "Goshov");
// console.log(fullName);

// function sqrt(number) {
//   return Math.sqrt(number);
// }
// console.log(sqrt(16));

//
// function add(first, second) {
//   return first + second;
// }
// console.log(add(5, 10));

// function expression:
// let sum = function (a, b) {
//   let result = a + b;

//   return result;
// };
// let result = sum(10, 5);
// console.log(result);

// function declaration:
// function sum(a, b) {
//   return a + b;
// }

// console.log(multiply(10, 2));
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(10, 2));

// function multiply(a, b) {
//   return a * b;
// }

// function repeatString(text, count){
//     let result = '';
//     for(let i = 0; i < count; i++){
//         result += text;
//     }
//     return result;
// }
// let result
// repeatString("abc", 3);

// задача 3
function mathPower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result = result * number;
  }

  return result;
}
console.log(mathPower(2, 8));

// function solve() {
//   let name = "pesho";
//   function nestedFunction() {
//     console.log(`${name} from nested function`);
//   }
//   console.log(name);

//   nestedFunction();

//   console.log(name);
// }
// solve();

// let sum = (a, b) => a + b;

// console.log(sum(2, 10));

// let sqrt = (x) => Math.sqrt(x);
// console.log(sqrt(64));

function simpleCalculator(firstOperand, secondOperand, operator) {
  let operation = null;
  switch (operator) {
    case "multiply":
      operation = (a, b) => a * b;
      break;
    case "add":
      operation = (a, b) => a + b;
      break;
    case "subtract":
      operation = (a, b) => a - b;
      break;
    case "divide":
      operation = (a, b) => a / b;
      break;
  }
  let result = operation(firstOperand, secondOperand);
  console.log(result);
}
simpleCalculator(5, 5, "multiply");

// function readFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// const fullName = readFullName("Severus", "Snape");
// console.log(fullName);

// function devide() {
//   let result = 25 / 5;
//   //   console.log(result);
// }
// console.log(devide());

// function devide() {
//   let result = 25 / 5;
//   return result;
// }
// // devide();
// console.log(devide());

// function printText(text) {
//   console.log(text);
// }
// printText("say something");

// let printText = function (text) {
//   console.log(text);
// };
// printText("get out");

// function printHeader() {
//   printHeaderTop();
//   printHeaderBottom();
// }

// function crash(){
//     crash();
// }

// function edu(grades) {
//   if (grades >= 2.0 && grades <= 2.99) {
//     console.log("Fail");
//   } else if (grades >= 3.0 && grades <= 3.49) {
//     console.log("Poor");
//   } else if (grades >= 3.5 && grades <= 4.49) {
//     console.log("Good");
//   } else if (grades >= 4.5 && grades <= 5.49) {
//     console.log("Very good");
//   } else if (grades >= 5.5 && grades <= 6.0) {
//     console.log("Excellent");
//   }
// }
// edu(4.78);

function edu(grades) {
  if (grades >= 2.0 && grades <= 2.99) {
    return "Fail";
  } else if (grades >= 3.0 && grades <= 3.49) {
    return "Poor";
  } else if (grades >= 3.5 && grades <= 4.49) {
    return "Good";
  } else if (grades >= 4.5 && grades <= 5.49) {
    return "Very good";
  } else if (grades >= 5.5 && grades <= 6.0) {
    return "Excellent";
  }
}
let education = edu(3.33);
console.log(education);

// function numberMe(num, power) {
//   let pow = 1;
//   for (let i = 0; i < power; i++) {
//     pow = pow * num;
//   }
//   return pow;
// }
// let meNow = numberMe(2, 8);
// console.log(meNow);

// let me = (a, b, operator) => a * b;
// console.log(me(5, 10, "multiply"));

// function me(a, b, operator) {
//   let operation = null;
//   switch (operator) {
//     case "multiply":
//       operation = (a, b) => a * b;
//       break;
//     case "add":
//       operation = (a, b) => a + b;
//       break;
//     case "subtract":
//       operation = (a, b) => a - b;
//       break;
//     case "divide":
//       operation = (a, b) => a / b;
//       break;
//   }
//   let meMe = operation(a, b);
//   console.log(meMe);
// }
// me(40, 8, "divide");

function repeatString(string, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  return result;
}
let meMe = repeatString("abc", 3);
console.log(meMe);

function drinks(drink, quantity) {
  let result = null;
  let price = 0;
  switch (drink) {
    case "coffee":
      result = (drink, quantity) => quantity * 1.5;
      break;
    case "water":
      result = (drink, quantity) => quantity * 1.0;
      break;
    case "coke":
      result = (drink, quantity) => quantity * 1.4;
      break;
    case "snacks":
      result = (drink, quantity) => quantity * 2.0;
      break;
  }
  let finalResult = result(drink, quantity);
  console.log(finalResult.toFixed(2));
}
drinks("water", 5);

function wrongResult(numOne, numTwo, numThree) {
  let result = "";
  if (numOne == 0 || numTwo == 0 || numThree == 0) {
    result = "Positive";
  } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
    result = "Positive";
  } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
    result = "Negative";
  } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
    result = "Negative";
  } else if (numOne > 0 && numTwo < 0 && numThree < 0) {
    result = "Positive";
  } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
    result = "Negative";
  } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
    result = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
    result = "Positive";
  } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
    result = "Negative";
  }
  console.log(result);
}
wrongResult(5, 12, -15);
wrongResult(-6, -12, 14);
wrongResult(-1, -2, -3);
wrongResult(-1, 0, 1);

// ===============================================================

// Exercises JS: Functions

// function smallestOfThreeNumbers(a, b, c) {
//   if (a < b && a < c) {
//     console.log(a);
//   } else if (b < a && b < c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }
// smallestOfThreeNumbers(2, 5, 3);

// function solve(a, b, c) {
//   console.log(Math.min(a, b, c));
// }
// solve(2, 5, 3);

// function addAndSubtract(num1, num2, num3) {
//   let result = num1 + num2 - num3;
//   return result;
// }
// let sum = addAndSubtract(23, 6, 10);
// console.log(sum);

function charactersInRange(firstChar, lastChar) {

  let first = getNumberValue(firstChar);
  let last = getNumberValue(lastChar);

  let min = Math.min(first, last);
  let max = Math.max(first, last);

  let allSymbols = getCharsInRange(min, max);

  console.log(joinSymbols(allSymbols, " "));

  function getNumberValue(char) {
      return char.charCodeAt(0);
  }

  function getCharValue(number) {
      return String.fromCharCode(number);
  }

  function getCharsInRange(start, end) {
      let characters = [];

      for (let i = (start + 1); i < end; i++) {
          let symbol = getCharValue(i);
          characters.push(symbol);
      }

      return characters;
  }

  function joinSymbols(arr, separator) {
      let result = "";
      for (let index in arr) {
          let character = arr[index];

          if (index <= (arr.length - 2)) {
              result += `${character}${separator}`;
          } else {
              result += character;
          }
      }
      return result;
  }
}
charactersInRange("a", "d");

function oddAndEvenSum(num) {
  num = String(num);
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < num.length; i++) {
    let element = Number(num[i]);
    if (element % 2 === 0) {
      sumEven += element;
    } else {
      sumOdd += element;
    }
  }
  console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);

//  function solve(arr){
//      for(let number of arr){
//          let reversedNumber = reverseNumber(number);
//          console.log(number === reversedNumber);
//      }

//     function reverseNumber(number){

//         let reversedValue = '';

//         while(number > 0){
//             let lastDigit = number % 10;
//             reversedValue += lastDigit;
//             number = parseInt(number / 10);
//         }
//         return Number(reversedValue);
//     }
//  }
//  solve([123,323,421,121]);

function factoriel(num1, num2) {
  let factorielDivide = fistFactoriel(num1);
  function fistFactoriel(a) {
    let division = a;

    for (let i = a - 1; i >= 1; i--) {
      division *= i;
    }
    return division;
  }
  let finals = factorielAndDivide(num2);
  function factorielAndDivide(a) {
    // let dividedNumbers = factorielDivide / a;
    let dividedNumbers = factorielDivide / fistFactoriel(a);
    let finals = dividedNumbers.toFixed(2);
    return finals;
  }
  console.log(finals);
}
factoriel(5, 2);
factoriel(6, 2);

// function solve(arr) {
//   for (let element of arr) {
//     let revNumber = reversedValue(element);
//     if (element === revNumber) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }

//   function reversedValue(element) {
//     let reversed = "";

//     while (element > 0) {
//       let lastDigit = element % 10;
//       reversed += lastDigit;
//       element = parseInt(element / 10);
//     }
//     return Number(reversed);
//   }
// }
// solve([123, 323, 421, 121]);

function nxnMatrix(num){
    let result = '';

    function rows(num){
    for (let i = 0; i < num; i++) {
        result += `${num} `;
       }
    }
    rows(num);

    function cols(num){
    for(let i = 0; i < num; i++){
        console.log(result);
        }
    }
    cols(num);
}
nxnMatrix(7);

// function solve(num) {
//   num = String(num);
//   let sumOdd = 0;
//   let sumEven = 0;
//   for (let i = 0; i < num.length; i++) {
//     let element = num[i];
//     if (element % 2 === 0) {
//       sumEven += Number(element);
//     } else {
//       sumOdd += Number(element);
//     }
//   }
//   console.log(sumOdd, sumEven);
// }
// solve(3495892137259234);

function perfectNumber(number){

    let getProperDivisorSum = number => {
        let properDivisorSum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                properDivisorSum += i;
            }
        }

        return properDivisorSum;
    }

    if (getProperDivisorSum(number) === number) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6);

// function solve(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   if (sum === num) {
//     console.log("We have a perfect number!");
//   } else {
//     console.log(`It's not so perfect.`);
//   }
// }
// solve(1236498);

// function solve(num) {
//   let result = "";
//   function rows(num) {
//     for (let i = 0; i < num; i++) {
//       result += `${num} `;
//     }
//   }
//   rows(num);
//   function cols(num) {
//     for (let i = 0; i < num; i++) {
//       console.log(result);
//     }
//   }
//   cols(num);
// }
// solve(3);

function loadingBar(loading) {
  let array = [];
  let loadedCounter = 0;
  let loadPic = "%";
  let toLoadPic = ".";
  findLoading(loading);
  findToLoad(loading);

  if (loading !== 100) {
    console.log(`${loading}% [${array.join("")}]`);
    console.log(`Still loading...`);
  } else {
    console.log(`100% Complete!`);
    console.log(`[${array.join("")}]`);
  }

  function findLoading(x) {
    for (let index = 1; index <= parseInt(x / 10); index++) {
      loadedCounter = index;
      array.push(loadPic);
    }
  }
  function findToLoad(x) {
    for (let index = loadedCounter; index < 10; index++) {
      array.push(toLoadPic);
    }
  }
}
loadingBar(30);

// function solve(num) {
//   let percentages = `%`.repeat(num / 10);
//   let dotts = `.`.repeat(10 - num / 10);

//   if (num === 100) {
//     console.log(`${num}% Complete!`);
//     console.log(`[${percentages}]`);
//   } else {
//     console.log(`${num}% [${percentages}${dotts}]`);
//     console.log(`Still loading...`);
//   }
// }
// solve(30);
// solve(50);
// solve(100);

function solve(num1, num2) {
  let sum1 = 1;
  for (let i = 1; i <= num1; i++) {
    sum1 *= i;
  }

  let sum2 = 1;
  for (let i = 1; i <= num2; i++) {
    sum2 *= i;
  }
  let result = sum1 / sum2;
  console.log(result.toFixed(2));
}
solve(5, 2);



