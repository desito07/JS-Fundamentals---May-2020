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
