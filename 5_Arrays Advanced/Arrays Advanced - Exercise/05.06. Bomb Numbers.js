function bombNumbers(arr, bombInfo) {

  let bomb = bombInfo[0];
  let range = bombInfo[1];  

  let index = arr.indexOf(bomb);
  // console.log(index);
  while (index > -1) {
    
    arr.splice(Math.max((index - range), 0), Math.min(range, index)); // left detonation
    index = arr.indexOf(bomb);
    arr.splice(index, (range + 1)); // right detonation
    index = arr.indexOf(bomb);
  }
  let sum = 0;
  for(let element of arr){
    sum += element;
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
