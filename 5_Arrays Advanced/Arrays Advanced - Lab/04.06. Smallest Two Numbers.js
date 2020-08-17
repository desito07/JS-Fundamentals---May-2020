function smallestTwoNumbers(arr) {
  let compareFunction = arr.sort((a, b) => a - b);
  // console.log(arr);
  let newArr = arr.splice(2);
  // console.log(newArr);
  console.log(arr.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
