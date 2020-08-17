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