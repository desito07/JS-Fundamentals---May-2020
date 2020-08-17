//  Lab: JS Basic Syntax, Conditional Statements and Loops
// =========================================================

function multiplyNumberBy2(num) {
  num = Number(num);
  console.log(num * 2);
}
multiplyNumberBy2(2);

function excellentGrade(num) {
  num = Number(num);
  if (num >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}
excellentGrade(5.5);

function numbersFrom1to5() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
numbersFrom1to5();

function numbersFromNTo1(n) {
  while (n >= 1) {
    console.log(n);
    n--;
  }
}
numbersFromNTo1(5);

function numbersFromMtoN(m, n) {
  while (m >= n) {
    console.log(m);
    m--;
  }
}
numbersFromMtoN(6, 2);

function studentInformation(name, age, grade) {
  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}
studentInformation("John", 15, 5.54678);

function monthPrinter(month) {
  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("March");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("May");
      break;
    case 6:
      console.log("June");
      break;
    case 7:
      console.log("July");
      break;
    case 8:
      console.log("August");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("October");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("December");
      break;
    default:
      console.log("Error!");
      break;
  }
}
monthPrinter(2);

function foreignLanguages(language) {
  switch (language) {
    case "England":
    case "USA":
      console.log("English");
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");
      break;
    default:
      console.log("unknown");
      break;
  }
}
foreignLanguages("USA");

function theatrePromotions(day, age) {
  let price = 0;
  if (day === "Weekday") {
    if (age >= 0 && age <= 18) {
      price = 12;
    } else if (age > 18 && age <= 64) {
      price = 18;
    } else if (age > 64 && age <= 122) {
      price = 12;
    }
  } else if (day === "Weekend") {
    if (age >= 0 && age <= 18) {
      price = 15;
    } else if (age > 18 && age <= 64) {
      price = 20;
    } else if (age > 64 && age <= 122) {
      price = 15;
    }
  } else if (day === "Holiday") {
    if (age >= 0 && age <= 18) {
      price = 5;
    } else if (age > 18 && age <= 64) {
      price = 12;
    } else if (age > 64 && age <= 122) {
      price = 10;
    }
  }
  if (price !== 0) {
    console.log(`${price}$`);
  } else {
    console.log("Error!");
  }
}
theatrePromotions("Holiday", -12);

function divisibleBy3() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
divisibleBy3();

function sumOfOddNumbers(n) {
  let sum = 0;
  let counter = 0;
  let currentNum = 1;

  while (counter < n) {
    if (currentNum % 2 !== 0) {
      console.log(currentNum);
      sum += currentNum;
      counter++;
    }
    currentNum++;
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);

//  Exercise: JS Basic Syntax, Conditional Statements and Loops
// ==============================================================

function ages(age) {
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
ages(-5);

function rounding(num, precision) {
  if (precision <= 15) {
    precision = precision;
  } else {
    precision = 15;
  }
  console.log(parseFloat(num.toFixed(precision)));
}
rounding(10.5, 3);
rounding(3.141592653589793, 2);

function division(num) {
  if (num % 10 === 0) {
    console.log(`The number is divisible by 10`);
  } else if (num % 7 == 0) {
    console.log(`The number is divisible by 7`);
  } else if (num % 6 == 0) {
    console.log(`The number is divisible by 6`);
  } else if (num % 3 == 0) {
    console.log(`The number is divisible by 3`);
  } else if (num % 2 === 0) {
    console.log(`The number is divisible by 2`);
  } else {
    console.log("Not divisible");
  }
}
division(1643);
division(30);

function vacation(people, type, day) {
  let price = 0;
  if (day === "Friday") {
    if (type === "Students") {
      if (people >= 30 && people < 100) {
        price = 8.45 * people * 0.85;
      } else {
        price = 8.45 * people;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 10.9;
      } else {
        price = people * 10.9;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people < 30) {
        price = people * 15 * 0.95;
      } else {
        price = people * 15;
      }
    }
  } else if (day === "Saturday") {
    if (type === "Students") {
      if (people >= 30 && people < 100) {
        price = 9.8 * people * 0.85;
      } else {
        price = 9.8 * people;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 15.6;
      } else {
        price = people * 15.6;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people < 30) {
        price = people * 20 * 0.95;
      } else {
        price = people * 20;
      }
    }
  } else if (day === "Sunday") {
    if (type === "Students") {
      if (people >= 30 && people < 100) {
        price = 10.46 * people * 0.85;
      } else {
        price = 10.46 * people;
      }
    } else if (type === "Business") {
      if (people >= 100) {
        price = (people - 10) * 16;
      } else {
        price = people * 16;
      }
    } else if (type === "Regular") {
      if (people >= 10 && people < 30) {
        price = people * 22.5 * 0.95;
      } else {
        price = people * 22.5;
      }
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }
}
leapYear(1900);

function printAndSum(start, end) {
  let sum = 0;
  let currentNum = "";
  for (let i = start; i <= end; i++) {
    sum += i;
    currentNum += i + " ";
  }
  console.log(currentNum);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);

function triangleOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${i} `.repeat(i));
  }
}
triangleOfNumbers(5);

function multiplicationTable(num) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} X ${i} = ${result}`);
  }
}
multiplicationTable(5);

function login(input) {
  let username = input.shift();
  let password = username.split("").reverse().join("");

  let failsCounter = 0;

  for (let i = 0; i < input.length; i++) {
    let currentPassword = input[i];

    if (currentPassword !== password) {
      failsCounter++;
      if (failsCounter > 3) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log(`Incorrect password. Try again.`);
    } else {
      console.log(`User ${username} logged in.`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);

// function login(input) {
//   let username = input.shift();
//   let password = username.split("").reverse().join("");

//   let failsCounter = 0;
//   let currentPassword = input.shift();
//   while (currentPassword !== password && failsCounter < 3) {
//     failsCounter++;
//     console.log(`Incorrect password. Try again.`);
//     currentPassword = input.shift();
//   }
//   if (currentPassword === password) {
//     console.log(`User ${username} logged in.`);
//   } else {
//     console.log(`User ${username} blocked!`);
//   }
// }
// login(["Acer", "login", "go", "let me in", "recA"]);
// login(["momo", "omom"]);
// login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);

function Pyramid(base, increment) {
  let stoneTotal = 0;
  let marbleTotal = 0;
  let lapisTotal = 0;
  let goldTotal = 0;
  let row = 0;
  let currentbase = base;

  while (currentbase > 2) {
    let marble = currentbase * 4 - 4;
    let stone = currentbase * currentbase - marble;
    stoneTotal += stone;
    row++;
    if (row % 5 === 0) {
      lapisTotal += marble;
    } else {
      marbleTotal += marble;
    }
    currentbase -= 2;
  }
  row++;
  let gold = currentbase * currentbase;

  stone = Math.ceil(stoneTotal * increment);
  marble = Math.ceil(marbleTotal * increment);
  lapis = Math.ceil(lapisTotal * increment);
  goldTotal = Math.ceil(gold * increment);
  heightTotal = Math.floor(row * increment);

  console.log(`Stone required: ${stone}`);
  console.log(`Marble required: ${marble}`);
  console.log(`Lapis Lazuli required: ${lapis}`);
  console.log(`Gold required: ${goldTotal}`);
  console.log(`Final pyramid height: ${heightTotal}`);
}
Pyramid(11, 1);

function bitcoinMining(array) {
  let bitcoin = 11949.16;
  let gold = 67.51;
  let totalSum = 0;
  let day = 0;
  let firstDay = 0;
  let boughtBitcoin = 0;
  let countBitcoin = 0;
  let sumBitcoins = 0;

  for (let index = 0; index < array.length; index++) {
    day++;
    let element = array[index];
    if (day % 3 == 0) {
      element = element * 0.7;
    }
    let singleDayEarning = element * gold;
    totalSum += singleDayEarning;

    if (totalSum >= bitcoin) {
      countBitcoin++;
      boughtBitcoin = Math.floor(totalSum / bitcoin);
      totalSum = totalSum - bitcoin * boughtBitcoin;
      sumBitcoins += boughtBitcoin;
    }
    if (countBitcoin == 1) {
      firstDay = day;
    }
  }

  console.log(`Bought bitcoins: ${sumBitcoins}`);
  if (firstDay != 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);

// function bitcoinMining(input) {
//   let goldValue = 67.51;
//   let bitcoinValue = 11949.16;
//   let bitcoinCount = 0;
//   let firstDay;
//   let totalMoney = 0;

//   for (let i = 1; i <= input.length; i++) {
//     let goldMined = input[i - 1];

//     if (i % 3 === 0) {
//       goldMined *= 0.7;
//       totalMoney += goldMined * goldValue;
//     } else {
//       totalMoney += goldMined * goldValue;
//     }
//     if (totalMoney >= bitcoinValue) {
//       if (firstDay === undefined) {
//         firstDay = i;
//       }
//       bitcoinCount += parseInt(totalMoney / bitcoinValue);
//       totalMoney -= parseInt(totalMoney / bitcoinValue) * bitcoinValue;
//       // totalMoney %= bitcoinValue;
//     }
//   }
//   console.log(`Bought bitcoins: ${bitcoinCount}`);
//   if (firstDay !== undefined) {
//     console.log(`Day of the first purchased bitcoin: ${firstDay}`);
//   }
//   console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
// }
// bitcoinMining([100, 200, 300]);

// More Exercise : JS Basic Syntax, Conditional Statements and Loops
// ==================================================================

function sortNumbers(a, b, c) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = 0;
  let third = 0;

  let wait = 0;

  if (a > first) {
    first = a;
    second = b;
    third = c;
  }
  if (b > first) {
    first = b;
    second = a;
    third = c;
  }
  if (c > first) {
    first = c;
    second = a;
    third = b;
  }
  if (third > second) {
    wait = second;
    second = third;
    third = wait;
  }
  console.log(first);
  console.log(second);
  console.log(third);
}
sortNumbers(2, 1, 3);

function englishNameoftheLastDigit(num) {
  let lastDigit = num % 10;

  if (lastDigit < 0) {
    lastDigit = Math.abs(lastDigit);
  }

  if (lastDigit == 1) {
    console.log("one");
  } else if (lastDigit == 2) {
    console.log("two");
  } else if (lastDigit == 3) {
    console.log("three");
  } else if (lastDigit == 4) {
    console.log("four");
  } else if (lastDigit == 5) {
    console.log("five");
  } else if (lastDigit == 6) {
    console.log("six");
  } else if (lastDigit == 7) {
    console.log("seven");
  } else if (lastDigit == 8) {
    console.log("eight");
  } else if (lastDigit == 9) {
    console.log("nine");
  } else if (lastDigit == 0) {
    console.log("zero");
  }
}
englishNameoftheLastDigit(-518);

function nextDay(y, m, d) {
  let date = new Date(y, m - 1, d);
  let tomorrow = new Date(y, m - 1, date.getDate() + 1);
  console.log(
    `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`
  );
}
nextDay(2016, 9, 30);

function reverseString(stringMe) {
  console.log(stringMe.split("").reverse().join(""));
}
reverseString("SoftUni");

function distanceBetweenPoints(x1, y1, x2, y2) {
  let a = x1 - x2;
  let b = y1 - y2;
  let c = Math.sqrt(a * a + b * b);
  console.log(c);
}
distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);

// Excercise with Miro 22/05/2020
// ==========================================================

// function ages(age) {
//   if (age >= 0 && age <= 2) {
//     console.log("baby");
//   } else if (age >= 3 && age <= 13) {
//     console.log("child");
//   } else if (age >= 14 && age <= 19) {
//     console.log("teenager");
//   } else if (age >= 20 && age <= 65) {
//     console.log("adult");
//   } else if (age >= 66) {
//     console.log("elder");
//   } else {
//     console.log("out of bounds");
//   }
// }
// ages(-5);

// function rounding(num, precision) {
//   if (precision >= 15) {
//     precision = 15;
//   } else {
//     precision = precision;
//   }
//   console.log(parseFloat(num.toFixed(precision)));
// }
// rounding(3.1415926535897932384626433832795, 2);

// function division(num) {
//   if (num % 10 === 0) {
//     console.log("The number is divisible by 10");
//   } else if (num % 7 === 0) {
//     console.log("The number is divisible by 7");
//   } else if (num % 6 === 0) {
//     console.log("The number is divisible by 6");
//   } else if (num % 3 === 0) {
//     console.log("The number is divisible by 3");
//   } else if (num % 2 === 0) {
//     console.log("The number is divisible by 2");
//   } else {
//     console.log("Not divisible");
//   }
// }
// division(30);

// function vacation(people, type, day) {
//   let price = 0;
//   if (day === "Friday") {
//     if (type === "Students") {
//       if (people >= 30 && people < 100) {
//         price = 8.45 * people * 0.85;
//       } else {
//         price = 8.45 * people;
//       }
//     } else if (type === "Business") {
//       if (people >= 100) {
//         price = (people - 10) * 10.9;
//       } else {
//         price = people * 10.9;
//       }
//     } else if (type === "Regular") {
//       if (people >= 10 && people < 30) {
//         price = people * 15 * 0.95;
//       } else {
//         price = people * 15;
//       }
//     }
//   } else if (day === "Saturday") {
//     if (type === "Students") {
//       if (people >= 30 && people < 100) {
//         price = 9.8 * people * 0.85;
//       } else {
//         price = 9.8 * people;
//       }
//     } else if (type === "Business") {
//       if (people >= 100) {
//         price = (people - 10) * 15.6;
//       } else {
//         price = people * 15.6;
//       }
//     } else if (type === "Regular") {
//       if (people >= 10 && people < 30) {
//         price = people * 20 * 0.95;
//       } else {
//         price = people * 20;
//       }
//     }
//   } else if (day === "Sunday") {
//     if (type === "Students") {
//       if (people >= 30 && people < 100) {
//         price = 10.46 * people * 0.85;
//       } else {
//         price = 10.46 * people;
//       }
//     } else if (type === "Business") {
//       if (people >= 100) {
//         price = (people - 10) * 16;
//       } else {
//         price = people * 16;
//       }
//     } else if (type === "Regular") {
//       if (people >= 10 && people < 30) {
//         price = people * 22.5 * 0.95;
//       } else {
//         price = people * 22.5;
//       }
//     }
//   }
//   console.log(`Total price: ${price.toFixed(2)}`);
//   }
// vacation(40, "Regular", "Saturday");

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`yes`);
//   } else {
//     console.log(`no`);
//   }
// }
// leapYear(1984);

// function printAndSum(start, end) {
//   let sum = 0;
//   let currentNum = "";
//   for (let i = start; i <= end; i++) {
//     sum += i;
//     currentNum += i + " ";
//   }
//   console.log(currentNum);
//   console.log(`Sum: ${sum}`);
// }
// printAndSum(5, 10);

// function triangleOfNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(`${i} `.repeat(i));
//   }
// }
// triangleOfNumbers(3);

// function triangleOfNumbers(n) {
//   for (let row = 1; row <= n; row++) {
//     let output = "";
//     for (let number = 1; number <= row; number++) {
//       output += `${row} `;
//     }
//     console.log(output);
//   }
// }
// triangleOfNumbers(5);

// function multiplicationTable(num) {
//   for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     console.log(`${num} X ${i} = ${result}`);
//   }
// }
// multiplicationTable(5);

// function pyramid(base, increment) {
//   let stoneNeeded = 0;
//   let marbleNeeded = 0;
//   let lapisNeeded = 0;
//   let goldNeeded = 0;
//   let steps = 0;

//   while (base > 0) {
//     steps++;
//     let inside = Math.pow(base - 2, 2);

//     if (base - 2 < 1) {
//       goldNeeded += base * base * increment;
//     } else if (steps % 5 == 0) {
//       stoneNeeded += inside * increment;
//       lapisNeeded += (base * 4 - 4) * increment;
//     } else {
//       stoneNeeded += inside * increment;
//       marbleNeeded += (base * 4 - 4) * increment;
//     }

//     base -= 2;
//   }

//   let pyramidHeigth = Math.floor(steps * increment);

//   console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
//   console.log(`Marble required: ${Math.ceil(marbleNeeded)}`);
//   console.log(`Lapis Lazuli required: ${Math.ceil(lapisNeeded)}`);
//   console.log(`Gold required: ${Math.ceil(goldNeeded)}`);
//   console.log(`Final pyramid height: ${Math.floor(pyramidHeigth)}`);
// }

// pyramid(11, 0.75);

// =====================================================================
