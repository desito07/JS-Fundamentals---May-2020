function distinctArray(arr) {
  let newArr = [];
  for (let element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  console.log(newArr.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
