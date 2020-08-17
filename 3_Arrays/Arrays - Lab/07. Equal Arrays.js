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