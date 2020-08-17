function processOddNumbers(arr) {
 
  let oddPositions = arr.filter((num, i) => i % 2 !== 0);
  let doubledPositions = oddPositions.map((e) => e * 2);
  let reversedPositions = doubledPositions.reverse();
  //   // console.log(oddPositions);
  //   // console.log(doubledPositions);
  //   // console.log(reversedPositions);
  return reversedPositions.join(' ');
}
let result = processOddNumbers([3, 0, 10, 4, 7, 3]);
console.log(result);
