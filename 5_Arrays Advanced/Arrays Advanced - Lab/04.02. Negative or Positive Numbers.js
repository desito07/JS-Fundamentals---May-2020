function negativePositiveNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }
 console.log(result.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
