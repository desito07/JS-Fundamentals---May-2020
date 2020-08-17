function firstAndLastKNumbers(arr) {
  let k = arr.shift();

  let firstKnumbers = arr.slice(0, k);
  let lastKnumbers = arr.slice(arr.length - k);
  console.log(firstKnumbers.join(" "));
  console.log(lastKnumbers.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
