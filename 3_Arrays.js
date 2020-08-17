// Lab JS - Arrays

// let arr = [];

// const arr = [];
// const arr = Array();
// const arr = [10];
// console.log(arr.length);
// arr[0] = 8;
// arr[1] = 12;
// arr[5] = 3;

// console.log(arr.length);
// // arr = [];
// // arr = "Pesho";
// console.log(Array.isArray(arr));

// function sumFirstAndLastArrayElements(input) {
//   let first = Number(input.shift());
//   let second = Number(input.pop());
//   console.log(first + second);
// }
// sumFirstAndLastArrayElements(["20", "30", "40"]);

// function solve(arr) {
//   console.log(Number(arr[0]) + Number(arr[arr.length - 1]));
// }
// solve(["20", "30", "40"]);

// function solve() {
//   let name = ["Pesho", "Gosho", "Stamat"];
//   console.log(name[2]);
//   name[3] = "Mariyka";
//   console.log(name[3]);
//   console.log(name.length);
// }
// solve();

// function solve(input) {
//   let firstNumberText = Number(input[0]);
//   let lastNumberText = Number(input[input.length - 1]);
//   let sum = firstNumberText + lastNumberText;
//   console.log(sum);
// }
// solve(["20", "30", "40"]);

// function dayOfWeek(num) {
//   let days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   if (!(num >= 1 && num <= 7)) {
//     console.log("Invalid day!");
//   } else {
//     console.log(days[num - 1]);
//   }
// }
// dayOfWeek(1);

// function solve(input) {
//   let names = ["Pesho", "Gosho", "Stamat"];
//   names.push("Severus Snape");
//   // for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   // }
//   names[10] = "Luke";

//   names.push("Voldemort");
//   console.log(names.length);
//   // console.log(names.includes("Darth Vader"));
//   console.log(names.toString());
// }
// solve();

// function reverseAnArrayOfNumbers(num, numbers) {
//   let numbersSlice = [];
//   for (let i = 0; i < num; i++) {
//     numbersSlice.push(numbers[i]);
//   }
//   let result = "";
//   for (let i = numbersSlice.length - 1; i >= 0; i--) {
//     result += numbersSlice[i] + " ";
//   }
//   console.log(result);
// }
// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

// let students = ["Pesho", "Gosho", "Stamat"];
// let numbers = [1, 2, 3, 4, 5];
// let emptyArray = [];

// // console.log(students);
// console.log(numbers);
// // console.log(emptyArray);
// numbers[0] = numbers[1] + numbers[2];
// // students[0] = "Peter";
// // console.log(students);

// console.log(numbers);

function sumFirstAndLastArrayElements(numbers) {
  let firstElement = numbers[0];
  let lastElement = numbers[numbers.length - 1];
  let result = Number(firstElement) + Number(lastElement);
  console.log(result);
}
sumFirstAndLastArrayElements(["20", "30", "40"]);

function dayOfWeek(dayNumber) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(days[dayNumber - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(5);

// let arr = [10, 20, 30];
// console.log(arr);
// arr[0] = 5;
// console.log(arr);

// console.log(arr.includes(5));
// console.log(arr.includes(11));

// arr[-5] = 50;
// console.log(arr.length);
// console.log(arr);

// arr[3] = 25;
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr[arr.length];
// console.log(arr);

// let students = ["Pesho", "Gosho", "Stamat"];
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// function reverseAnArrayOfNumbers(length, numbers) {
//   let resultArray = [];
//   let result = "";

//   for (let i = 0; i < length; i++) {
//     resultArray[i] = numbers[i];
//   }
//   for (let i = length - 1; i >= 0; i--) {
//     result += resultArray[i] + " ";
//   }
//   console.log(result);
// }
// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);

// const capitals = ["Sofia", "Washington", "London"];
// for (let i = 0; i < capitals.length; i++) {
//   //   console.log(capitals[i]);
//   console.log(capitals.toString());
// }

function reverseAnArrayOfNumbers(n, inputArr) {
  let arr = [];
  let output = "";
  for (let i = 0; i < n; i++) {
    arr.push(inputArr[i]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    output += `${arr[i]} `;
  }
  console.log(output);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40]);

// function solve(length, numbers) {
//   let resultArray = [];
//   let output = "";
//   for (let i = 0; i < length; i++) {
//     // resultArray[i] = numbers[i];
//     resultArray.push(numbers[i]);
//   }
//   for (let i = resultArray.length - 1; i >= 0; i--) {
//     output += resultArray[i] + " ";
//   }
//   console.log(output);
// }
// solve(3, [10, 20, 30, 40]);

// -----------------------------------------------------
// for of
// let numbers = [1, 2, 290, 30, -1, -32];
// let output = "";
// for (let element of numbers) {
//   output += `${element}` + " ";
// }
// console.log(output);

// for in
// let numbers = [1, 2, 290, 30, -1, -32];
// let output = "";
// for (let index in numbers) {
//   output += `${index}` + " ";
// }
// console.log(output);
// -------------------------------------------------------

function reverseAnArrayOfStrings(elements) {
  let result = [];
  let textResult = "";
  let swapOperations = Math.ceil(elements.length / 2);
  // swap opereation as per the length of tha arr / 2
  for (let i = 0; i < swapOperations; i++) {
    result[i] = elements[elements.length - 1 - i];
    result[elements.length - 1 - i] = elements[i];
  }
  for (let element of result) {
    textResult += element + " ";
  }
  console.log(textResult);
}
reverseAnArrayOfStrings(["a", "b", "c", "d", "e"]);

function evenAndOddSubtraction(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }
  console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);

function sumEvenNumbers(elements) {
  let evenSum = 0;
  for (let i = 0; i < elements.length; i++) {
    elements[i] = Number(elements[i]);
  }
  for (let element of elements) {
    if (element % 2 === 0) {
      evenSum += element;
    }
  }
  console.log(evenSum);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);

// function solve(elements) {
//   let evenSum = 0;
//   let oddSum = 0;
//   for (let element of elements) {
//     if (element % 2 === 0) {
//       evenSum += element;
//     } else {
//       oddSum += element;
//     }
//   }
//   let result = evenSum - oddSum;
//   console.log(result);
// }
// solve([1, 2, 3, 4, 5, 6]);

function equalArrays(element1, element2) {
  let sum = 0;
  let index = 0;
  let areEqual = true;

  for (let i = 0; i < element1.length; i++) {
    let element1Num = Number(element1[i]);
    let element2Num = Number(element2[i]);

    if (element1Num !== element2Num) {
      index = i;
      areEqual = false;
      break;
    }
    sum += element1Num;
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index`);
  }
}
equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);

// function condenseArrayToNumber(numbers) {
//   let condensed = numbers;

//   while (condensed.length > 1) {
//     let tempCondensed = [];
//     for (let i = 0; i < condensed.length - 1; i++) {
//       tempCondensed[i] = condensed[i] + condensed[i + 1];
//     }
//     condensed = tempCondensed;
//   }
//   console.log(condensed[0]);
// }
// condenseArrayToNumber([2, 10, 3]);

// function solve(num, arr) {
//   let arrNew = [];
//   for (let i = 0; i < num; i++) {
//     arrNew[num - 1 - i] = arr[i];
//   }
//   console.log(arrNew.join(" "));

//   //   let result = "";
//   //   for (let i = arrNew.length - 1; i >= 0; i--) {
//   //     result += `${arrNew[i]} `;
//   //   }
//   //   console.log(result);
// }
// solve(3, [10, 20, 30, 40, 50]);

// function solve(arr) {
//   let arrNew = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     arrNew.push(arr[i]);
//   }
//   console.log(arrNew.join(" "));
// }
// solve(["a", "b", "c", "d", "e"]);

// function solve(arr) {
//   let sumEven = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let element = Number(arr[i]);
//     if (element % 2 === 0) {
//       sumEven += element;
//     }
//   }
//   console.log(parseInt(sumEven));
// }
// solve(["1", "2", "3", "4", "5", "6"]);

// function solve(arr) {
//   let sumEven = 0;
//   let sumOdd = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumEven += arr[i];
//     } else {
//       sumOdd += arr[i];
//     }
//   }
//   let result = sumEven - sumOdd;
//   console.log(result);
// }
// solve([1, 2, 3, 4, 5, 6]);

// function solve(arr1, arr2) {
//   let sum = 0;
//   let index = 0;
//   let isIdentical = true;
//   for (let i = 0; i < arr1.length; i++) {
//     let element1 = Number(arr1[i]);
//     let element2 = Number(arr2[i]);

//     if (element1 === element2) {
//       sum += element1;
//     } else {
//       index = i;
//       isIdentical = false;
//       break;
//     }
//   }
//   if (isIdentical) {
//     console.log(`Arrays are identical. Sum: ${sum}`);
//   } else {
//     console.log(`Arrays are not identical. Found difference at ${index} index`);
//   }
// }
// solve(["10", "20", "30"], ["10", "20", "30"]);
// solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);

function condenseArrayToNumber(arr) {
  let arrNew = arr;
  while (arrNew.length > 1) {
    let result = [];
    for (let i = 0; i < arrNew.length - 1; i++) {
      result[i] = arrNew[i] + arrNew[i + 1];
    }
    arrNew = result;
  }
  console.log(arrNew[0]);
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);

// ==========================================================

// Exercise JS - Arrays

function addOrSubtract(arr) {
  let arrNew = [];
  let arrNewSum = 0;
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
    let result = arr[i];
    if (result % 2 === 0) {
      result += i;
      arrNewSum += result;
    } else {
      result -= i;
      arrNewSum += result;
    }

    arrNew.push(result);
  }
  console.log(arrNew);
  console.log(arrSum);
  console.log(arrNewSum);
}
addOrSubtract([5, 15, 23, 56, 35]);

function commonElements(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let element1 = arr1[i];
    for (let i = 0; i < arr2.length; i++) {
      let element2 = arr2[i];
      if (element1 === element2) {
        console.log(element1);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);

function mergeArrays(arrOne, arrTwo) {
  let resultArr = [];
  for (let index in arrOne) {
    let result = "";

    let arrOneElement = arrOne[index];
    let arrTwoElement = arrTwo[index];
    if (index % 2 === 0) {
      result = Number(arrOneElement) + Number(arrTwoElement) + "";
    } else {
      result = arrOneElement + arrTwoElement;
    }
    resultArr.push(result);
  }
  console.log(resultArr.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

// function solve(arr1, arr2) {
//     let arr3 = [];

//     for (let index in arr1) {
//       let result = "";
//       if (index % 2 === 0) {
//         result = Number(arr1[index]) + Number(arr2[index]) + "";
//       } else {
//         result = arr1[index] + arr2[index];
//       }
//       arr3.push(result);
//     }
//     console.log(arr3.join(" - "));
//   }
//   solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

function arrayRotation(arr, rot) {
  let rotations = rot % arr.length;
  let resultArr = [];

  for (let index in arr) {
    if (index >= rotations) {
      let element = arr[index];
      resultArr.push(element);
    }
  }

  for (let index in arr) {
    if (index < rotations) {
      let element = arr[index];
      resultArr.push(arr[index]);
    } else {
      break;
    }
  }

  //   let resultStr = "";

  //   for (let index in resultArr) {
  //     let element = resultArr[index];

  //     if (index < resultArr.length - 1) {
  //       resultStr += `${element} `;
  //     } else {
  //       resultStr += `${element}`;
  //     }
  //   }
  //   console.log(resultStr);
  console.log(resultArr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);

function maxNumber(arr) {
  let result = "";

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let isBiggerEnough = true;

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];

      if (element <= nextElement) {
        isBiggerEnough = false;
        break;
      }
    }
    if (isBiggerEnough) {
      result += `${element} `;
    }
  }
  console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17]);

function equalSums(arr) {
  let result = "no";
  for (let index = 0; index < arr.length; index++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let i = 0; i < index; i++) {
      // calculate left sum

      let nextLeftNumber = arr[i];
      sumLeft += nextLeftNumber;
    }
    for (let i = index + 1; i < arr.length; i++) {
      // calculate right sum

      let nextRightNumber = arr[i];
      sumRight += nextRightNumber;
    }
    if (sumLeft === sumRight) {
      result = index;
      break;
    }
  }
  console.log(result);
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1, 2, 3, 3]);

function maxSequenceOfEqualElements(arr) {
  let bestSequence = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let currentSequence = [element];

    for (let i = index + 1; i < arr.length; i++) {
      let nextElement = arr[i];

      if (element === nextElement) {
        currentSequence.push(nextElement);
        index = i;
      } else {
        break;
      }
    }

    if (currentSequence.length > bestSequence.length) {
      bestSequence = currentSequence;
    }
  }

  console.log(bestSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

function magicSum(array, magicNumber) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];

    for (let index = i + 1; index < array.length; index++) {
      let nextElement = array[index];
      let isMagic = currentElement + nextElement === magicNumber;

      if (isMagic) {
        result.push(`${currentElement} ${nextElement}`);
      }
    }
  }

  console.log(result.join("\n"));
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);

// function solve(arr) {
//   let arrNew = [];
//   let arrSum = 0;
//   let arrNewSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let result = arr[i];
//     arrSum += result;
//     if (result % 2 === 0) {
//       result += i;
//       arrNewSum += result;
//     } else {
//       result -= i;
//       arrNewSum += result;
//     }

//     arrNew.push(result);
//   }
//   console.log(arrNew);
//   console.log(arrSum);
//   console.log(arrNewSum);
// }
// solve([5, 15, 23, 56, 35]);
// solve([-5, 11, 3, 0, 2]);

// function solve(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let element1 = arr1[i];
//     for (let i = 0; i < arr2.length; i++) {
//       let element2 = arr2[i];
//       if (element1 === element2) {
//         console.log(element1);
//       }
//     }
//   }
// }
// solve(
//   ["Hey", "hello", 2, 4, "Peter", "e"],
//   ["Petar", 10, "hey", 4, "hello", "2"]
// );

// function solve(arr1, arr2) {
//   let arr3 = [];
//   let sum = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     let element1 = Number(arr1[i]);
//     let element2 = Number(arr2[i]);
//     if (i % 2 === 0) {
//       sum = element1 + element2;
//     } else {
//       sum = arr1[i] + arr2[i];
//     }
//     arr3.push(sum);
//   }
//   console.log(arr3.join(" - "));
// }
// solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
// solve(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

// function solve(arr, num) {
//   let rotations = num % arr.length;
//   let arrNew = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= rotations) {
//       let element = arr[i];
//       arrNew.push(element);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i < rotations) {
//       let element = arr[i];
//       arrNew.push(element);
//     } else {
//       break;
//     }
//   }
//   console.log(arrNew.join(" "));
// }
// solve([51, 47, 32, 61, 21], 2);
// solve([32, 21, 61, 1], 4);
// solve([2, 4, 15, 31], 5);

// function solve(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     let isBiggerEnough = true;
//     let element = arr[i];
//     for (let index = i + 1; index < arr.length; index++) {
//       let nextElement = arr[index];
//       if (element <= nextElement) {
//         isBiggerEnough = false;
//         break;
//       }
//     }
//     if (isBiggerEnough) {
//       result += `${element} `;
//     }
//   }
//   console.log(result);
// }
// solve([14, 24, 3, 19, 15, 17]);

// function solve(arr) {
//   let result = "no";
//   for (let i = 0; i < arr.length; i++) {
//     let sumLeft = 0;
//     let sumRight = 0;
//     for (let index = 0; index < i; index++) {
//       let leftElement = arr[index];
//       sumLeft += leftElement;
//     }
//     for (let index = i + 1; index < arr.length; index++) {
//       let rightElement = arr[index];
//       sumRight += rightElement;
//     }
//     if (sumRight === sumLeft) {
//       result = i;
//       break;
//     }
//   }
//   console.log(result);
// }
// solve([1, 2, 3, 3]);
// solve([1, 2]);
// solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

// function solve(arr) {
//   let bestSequence = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     let currentSequence = [element];

//     for (let index = i + 1; index < arr.length; index++) {
//       let nextElement = arr[index];

//       if (element === nextElement) {
//         currentSequence.push(nextElement);
//         i = index;
//       } else {
//         break;
//       }
//     }
//     if (currentSequence.length > bestSequence.length) {
//       bestSequence = currentSequence;
//     }
//   }
//   console.log(bestSequence.join(" "));
// }
// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
// solve([1, 1, 1, 2, 3, 1, 3, 3]);

// function solve(arr, num) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];

//     for (let index = i + 1; index < arr.length; index++) {
//       let nextElement = arr[index];
//       let isMagic = element + nextElement === num;

//       if (isMagic) {
//         result.push(`${element} ${nextElement}`);
//       }
//     }
//   }
//   console.log(result.join("\n"));
// }
// solve([1, 7, 6, 2, 19, 23], 8);

// =============================================================

//  Преговор на масиви - втори път лекция и задачи

// let students = ["Pesho", "Gosho", "Stamat"];
// let numbers = [2, 4, 6, 8];
// numbers[0] = numbers[2] + numbers[3];
// console.log(numbers[0]);
// console.log(numbers);

// function solve(arr) {
//   let f = arr[0];
//   let l = arr[arr.length - 1];
//   let sum = Number(f) + Number(l);
//   console.log(sum);
// }
// solve([20, 30, 40]);

// function solve(num) {
//   let day = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];
//   if (num >= 1 && num <= day.length) {
//     console.log(day[num - 1]);
//   } else {
//     console.log("Invalid day!");
//   }
// }
// solve([45]);

// function solve(n, arr) {
//   let arrNew = [];
//   for (let i = 0; i < n; i++) {
//     let element = arr[i];
//     arrNew.push(element);
//   }
//   console.log(arrNew.reverse().join(" "));
// }
// solve(3, [10, 20, 30, 40, 50]);
// solve(2, [66, 43, 75, 89, 47]);

// function solve(arr){
//   console.log(arr.reverse().join(' '));
// }
// solve(['a', 'b', 'c', 'd', 'e']);

// function solve(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     let element = Number(arr[i]);
//     if(element % 2 === 0){
//       sum += element;
//     }
//   }
// console.log(sum);
// }
// solve(['1','2','3','4','5','6']);

// function solve(arr){
//   let sumEven = 0;
//   let sumOdd = 0;

//   for(let i = 0; i < arr.length; i++){
//     let element = arr[i];
//     if(element % 2 === 0){
//       sumEven += element;
//     } else {
//       sumOdd += element;
//     }
//   }
//   console.log(sumEven - sumOdd);
// }
// solve([1,2,3,4,5,6]);

// function equalArrays(element1, element2) {
//   let sum = 0;
//   let index = 0;
//   let areEqual = true;

//   for (let i = 0; i < element1.length; i++) {
//     let element1Num = Number(element1[i]);
//     let element2Num = Number(element2[i]);

//     if (element1Num !== element2Num) {
//       index = i;
//       areEqual = false;
//       break;
//     }
//     sum += element1Num;
//   }
//   if (areEqual) {
//     console.log(`Arrays are identical. Sum: ${sum}`);
//   } else {
//     console.log(`Arrays are not identical. Found difference at ${index} index`);
//   }
// }
// equalArrays(["10", "20", "30"], ["10", "20", "30"]);
// equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
// equalArrays(["1"], ["10"]);

// function solve(arr){
//   let arrNew = arr;

//   while(arrNew.length > 1){
//     let result = [];
//     for(let i = 0; i < arrNew.length - 1; i++){
//       let element = arrNew[i] + arrNew[i + 1];
//       result.push(element);
//     }
//     arrNew = result;
//   }
//   console.log(arrNew.join(' '));
// }
// solve([2,10,3]);
// =============================================

// Преговор на масиви - втори път задачи

// function solve(arr) {
//   let result = [];
//   let sumArr = 0;
//   let sumResult = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     sumArr += element;
//     if (element % 2 === 0) {
//       element += i;
//       sumResult += element;
//     } else {
//       element -= i;
//       sumResult += element;
//     }
//     result.push(element);
//   }
//   console.log(result);
//   console.log(sumArr);
//   console.log(sumResult);
// }
// solve([5, 15, 23, 56, 35]);

// function solve(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let element1 = arr1[i];
//     for (let i = 0; i < arr2.length; i++) {
//       let element2 = arr2[i];
//       if (element1 === element2) {
//         console.log(element1);
//       }
//     }
//   }
// }
// solve(
//   ["Hey", "hello", 2, 4, "Peter", "e"],
//   ["Petar", 10, "hey", 4, "hello", "2"]
// );

// function solve(arr1, arr2) {
//   let result = [];
//   let element3 = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     let element1 = arr1[i];
//     let element2 = arr2[i];

//       if (i % 2 === 0) {
//         element3 = Number(element1) + Number(element2);
//       } else {
//         element3 = element1 + element2;
//       }
//       result.push(element3);
//     }
//   console.log(result.join(" - "));
// }
// solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);

// function solve(arr, num) {
//   let rotations = num % arr.length;
//   let newarr = [];

//   // console.log(rotations);

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= rotations) {
//       let element = arr[i];
//       newarr.push(element);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i < rotations) {
//       let element = arr[i];
//       newarr.push(element);
//     } else {
//       break;
//     }
//   }
//   console.log(newarr.join(' '));
// }
// solve([51, 47, 32, 61, 21], 2);

// function solve(arr) {
//   let result = '';
//   for (let i = 0; i < arr.length; i++) {
//     let isBiggerEnough = true;
//     let element = arr[i];

//     for (let index = i + 1; index < arr.length; index++) {
//       let nextElement = arr[index];
//       if (element <= nextElement) {
//         isBiggerEnough = false;
//         break;
//       }
//     }
//       if(isBiggerEnough){
//         result += `${element} `;
//     }
//   }
//   console.log(result);
// }
// solve([1, 4, 3, 2]);
// solve([14, 24, 3, 19, 15, 17]);

// function solve(arr) {
//   let result = "no";
//   for (let index = 0; index < arr.length; index++) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let i = 0; i < index; i++) {
//       let nextLeftNumber = arr[i];
//       leftSum += nextLeftNumber;
//     }
//     for (let i = index + 1; i < arr.length; i++) {
//       let nextRightNumber = arr[i];
//       rightSum += nextRightNumber;
//     }
//     if (leftSum === rightSum) {
//       result = index;
//       break;
//     }
//   }
//   console.log(result);
// }
// solve([1, 2, 3, 3]);

// function solve(arr){
//     let best = [];
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];
//         let current = [element];
//         for(let index = i + 1; index < arr.length; index++){
//             let nextElement = arr[index];
//             if(element === nextElement){
//                 current.push(nextElement);
//             } else {
//                 break;
//             }
//         }
//         if(current.length > best.length){
//             best = current;
//         }
//     }
//     console.log(best.join(' '));
// }
// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);

// function solve(arr, num) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     for (let index = i + 1; index < arr.length; index++) {
//       let nextElement = arr[index];
//       let isMagic = element + nextElement === num;
//       if (isMagic) {
//         result.push(`${element} ${nextElement}`);
//       }
//     }
//   }
//   console.log(result.join("\n"));
// }
// solve([1, 7, 6, 2, 19, 23], 8);

function dungeonDark(arr) {
  let dungeon = arr[0].split("|");
  // console.log(dungeon);
  let health = 100;
  let coins = 0;
  let allCoins = 0;
  let roomsCount = 0;

  for (let i = 0; i < dungeon.length; i++) {
    let element = dungeon[i];
    let currentRoom = dungeon[i].split(" ");
    // console.log(currentRoom);
    let command = currentRoom[0];
    let num = Number(currentRoom[1]);
    roomsCount++;

    if(command === "potion"){
        if(health + num > 100){
            num = 100 - health;
            health = 100;
        } else {
            health += num;
        }
        console.log(`You healed for ${num} hp.`);
        console.log(`Current health: ${health} hp.`);

    } else if( command === "chest"){
        coins = Number(num);
        allCoins = Number(coins);
        console.log(`You found ${coins} coins.`);
    } else {
        health -= num;
        if(health > 0){
            console.log(`You slayed ${command}.`);
        } else {
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${roomsCount}.`);
            return;
        }
    }
  }
  console.log(`You've made it!", "Coins: ${allCoins}", "Health: ${health}".`);
}
dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
