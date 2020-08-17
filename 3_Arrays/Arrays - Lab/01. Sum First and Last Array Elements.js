function sumFirstAndLastArrayElements(numbers) {
    let firstElement = numbers[0];
    let lastElement = numbers[numbers.length - 1];
    let result = Number(firstElement) + Number(lastElement);
    console.log(result);
  }
  sumFirstAndLastArrayElements(["20", "30", "40"]);