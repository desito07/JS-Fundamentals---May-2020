// Programming Fundamentals Mid Exam - 29 February 2020 Group 1
// ============================================================

function muOnline(arr) {
  let online = arr.split("|");
  //   console.log(online);
  let health = 100;
  let bitcoin = 0;
  let allBitcoin = 0;
  let roomsCounter = 0;

  for (let i = 0; i < online.length; i++) {
    let currentRoom = online[i].split(" ");
    // console.log(currentRoom);
    let command = currentRoom[0];
    let num = Number(currentRoom[1]);
    roomsCounter++;

    if (command === "potion") {
      if (health + num > 100) {
        num = 100 - health;
        health = 100;
      } else {
        health += num;
      }
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoin = Number(num);
      allBitcoin += bitcoin;
      console.log(`You found ${bitcoin} bitcoins.`);
    } else {
      health -= Number(num);
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomsCounter}`);
        return;
      }
    }
  }
  console.log("You've made it!");
  console.log(`Bitcoins: ${allBitcoin}`);
  console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');