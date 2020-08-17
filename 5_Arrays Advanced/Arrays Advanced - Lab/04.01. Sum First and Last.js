function sumFirstAndLast(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);
    sum = firstElement + lastElement;
  }
  return sum;
}
console.log(sumFirstAndLast(["20", "30", "40"]));
