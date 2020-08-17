function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  // console.log(neighborhood);

  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    let arr = input[i].split(" ");
    let command = arr[0];
    let num = arr[1];
    // console.log(command);
    // console.log(num);
    let index = neighborhood.indexOf(arr[1]);
    switch (command) {
      case "Jump":
        if (index >= 0 && index < neighborhood.length) {
          neighborhood.splice(index, 0);
        }
        break;
      case "Love!":
        break;
    }
  }
  console.log(neighborhood);
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelivery([
//   "2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!",
// ]);
