// Lab: Basic Data Types and Variables
// ===================================

function concatenateNames(fistName, lastName, delimiter) {
  console.log(`${fistName}${delimiter}${lastName}`);
}
concatenateNames("John", "Smith", "->");

function rightPlace(strA, charAB, strB) {
  let strAR = strA.replace("_", charAB);
  if (strAR === strB) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");

function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  if (sum % 1 === 0) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
integerAndFloat(9, 100, 1.1);

function amazingNumbers(num1) {
  num1 = String(num1);
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
    sum += Number(num1[i]);
  }
  let result = String(sum).includes(9);
  console.log(`${num1} Amazing? ${result ? "True" : "False"}`);
}
amazingNumbers(1233);
amazingNumbers(999);

function gramophone(band, album, song) {
  band = String(band);
  album = String(album);
  song = String(song);
  console.log(
    `The plate was rotated ${Math.ceil(
      (album.length * band.length * song.length) / 2 / 2.5
    )} times.`
  );
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");

function fuelMoney(distance, passengers, price) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += passengers * 0.1;
  let money = neededFuel * price;
  console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);

function centuriesToMinutes(num) {
  let years = num * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = days * 24;
  let mins = hours * 60;
  console.log(
    `${num} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`
  );
}
centuriesToMinutes(1);

function specialNumbers(n) {
  let sum = 0;
  let result = "";
  for (let i = 1; i <= n; i++) {
    i = String(i);
    for (let j = 0; j < i.length; j++) {
      sum += Number(i[j]);
    }
    result = sum === 5 || sum === 7 || sum === 11;
    console.log(result ? `${i} -> True` : `${i} -> False`);
    sum = 0;
  }
}
specialNumbers(15);

function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let currentNum = i;
    let currentSum = 0;

    while (currentNum > 0) {
      currentSum += currentNum % 10;
      currentNum = parseInt(currentNum / 10);
    }

    if (currentSum == 5 || currentSum == 7 || currentSum == 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);

function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    let firstLetter = String.fromCharCode(i + 97);
    for (let j = 0; j < n; j++) {
      let secondLetter = String.fromCharCode(j + 97);
      for (let k = 0; k < n; k++) {
        let thirdLetter = String.fromCharCode(k + 97);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
triplesOfLatinLetters("3");

// function triplesOfLatinLetters(n) {
//   let firstLettersCode = "a".charCodeAt(0);

//   for (let i = 0; i < n; i++) {
//     for (j = 0; j < n; j++) {
//       for (let k = 0; k < n; k++) {
//         let combination = String.fromCharCode(
//           firstLettersCode + i,
//           firstLettersCode + j,
//           firstLettersCode + k
//         );
//         console.log(combination);
//       }
//     }
//   }
// }
// triplesOfLatinLetters(3);

// Exercise: Data Types and Variables
// =====================================

function sumDigits(n) {
  n = String(n);
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  console.log(sum);
}
sumDigits(245678);

function charsToString(a, b, c) {
  a = String(a);
  b = String(b);
  c = String(c);
  console.log(`${a}${b}${c}`);
}
charsToString("a", "b", "c");

function townInfo(town, population, area) {
  console.log(
    `Town ${town} has population of ${population} and area ${area} square km.`
  );
}
townInfo("Sofia", 1286383, 492);

function convertMetersToKilometres(distance) {
  let km = distance / 1000;
  console.log(km.toFixed(2));
}
convertMetersToKilometres(1852);

function poundsToDollars(currency) {
  let newCurrency = currency * 1.31;
  console.log(newCurrency.toFixed(3));
}
poundsToDollars(80);

function reversedChars(a, b, c) {
  a = String(a);
  b = String(b);
  c = String(c);
  console.log(
    c.split("").reverse().join("") +
      " " +
      b.split("").reverse().join("") +
      " " +
      a.split("").reverse().join("")
  );
}
reversedChars("A", "B", "C");

function lowerOrUpper(character) {
  if (character === character.toLowerCase()) {
    console.log("lower-case");
  } else {
    console.log("upper-case");
  }
}
lowerOrUpper("B");

function calculator(num, operator, otherNum) {
  if (operator === "+") {
    console.log((num + otherNum).toFixed(2));
  } else if (operator === "-") {
    console.log((num - otherNum).toFixed(2));
  } else if (operator === "*") {
    console.log((num * otherNum).toFixed(2));
  } else if (operator === "/") {
    console.log((num / otherNum).toFixed(2));
  } else if (operator === "%") {
    console.log((num % otherNum).toFixed(2));
  }
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);

function gladiatorExpenses(
  lostFightCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetCount = 0;
  let swordCount = 0;
  let shieldCount = 0;
  let armorCount = 0;

  for (let i = 1; i <= lostFightCount; i++) {
    if (i % 2 === 0) {
      helmetCount++;
    }
    if (i % 3 === 0) {
      swordCount++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      shieldCount++;
    }
    if (i % 4 === 0 && i % 6 === 0) {
      armorCount++;
    }
  }
  let expense =
    helmetPrice * helmetCount +
    swordCount * swordPrice +
    shieldCount * shieldPrice +
    armorCount * armorPrice;
  console.log(`Gladiator expenses: ${expense.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);

function spiceMustFlow(startYield) {
  startYield = startYield;
  let totalAmount = 0;
  let days = 0;
  let workersSpice = 26;
  let expectedYield = startYield;

  if (expectedYield < 100) {
    console.log(days);
    console.log(totalAmount);
  } else {
    while (expectedYield >= 100) {
      expectedYield -= workersSpice;
      totalAmount += expectedYield;
      startYield -= 10;
      expectedYield = startYield;
      days++;
    }
    totalAmount -= 26;
    console.log(days);
    console.log(totalAmount);
  }
}
spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(200);

// More Exercise: Data Types and Variables
// =======================================

function digitsWithWords(stringMe) {
  switch (stringMe) {
    case "one":
      console.log("1");
      break;
    case "two":
      console.log("2");
      break;
    case "three":
      console.log("3");
      break;
    case "four":
      console.log("4");
      break;
    case "five":
      console.log("5");
      break;
    case "six":
      console.log("6");
      break;
    case "seven":
      console.log("7");
      break;
    case "eight":
      console.log("8");
      break;
    case "nine":
      console.log("9");
      break;
    default:
      console.log("0");
      break;
  }
}
digitsWithWords("zero");

function primeNumberChecker(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log(count === 2 ? true : false);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);

function isPrime(num) {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  console.log(prime);
}
isPrime(7);
isPrime(8);
isPrime(81);

function cone(radius, height) {
  let volume = (height * Math.PI * radius * radius) / 3;
  let area =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
  console.log(`volume = ${volume.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);

function biggestOf3Numbers(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1);
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2);
  } else {
    console.log(n3);
  }
}
biggestOf3Numbers([-2, 7, 3]);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);

function binaryToDecimal(a) {
  a = Number(a);
  let b = parseInt(a, 2);
  console.log(b);
}
binaryToDecimal("00001001");
binaryToDecimal("11110000");

function chessBoard(arg) {
  let size = Number(arg);
  let currentColour = "black";
  let previousColour = "";
  console.log('<div class="chessboard">');

  for (let rows = 1; rows <= size; rows++) {
    console.log("  <div>");

    for (let columns = 1; columns <= size; columns++) {
      console.log(`    <span class="${currentColour}"></span>`);

      previousColour = currentColour;
      currentColour = previousColour === "black" ? "white" : "black";
    }

    console.log("  </div>");
    if (size % 2 === 0) {
      previousColour = currentColour;
      currentColour = previousColour === "black" ? "white" : "black";
    }
  }

  console.log("</div>");
}
chessBoard(3);

function triangleArea(side1, side2, side3) {
  let n = Math.sqrt(
    ((side1 + side2 + side3) / 2) *
      ((side2 + side3 + side1) / 2 - side1) *
      ((side1 + side3 + side2) / 2 - side2) *
      ((side1 + side2 + side3) / 2 - side3)
  );
  console.log(n);
}
triangleArea(2, 3.5, 4);

// =======================================================================
