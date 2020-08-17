function dungeonDark(arr) {
    let dungeon = arr[0].split("|");
    // console.log(dungeon);
    let health = 100;
    let coins = 0;
    let allCoins = 0;
    let roomsCount = 0;
  
    for (let i = 0; i < dungeon.length; i++) {
      let element = dungeon[i];
      let currentRoom = dungeon[i].split(" ");
      // console.log(currentRoom);
      let command = currentRoom[0];
      let num = Number(currentRoom[1]);
      roomsCount++;
  
      if(command === "potion"){
          if(health + num > 100){
              num = 100 - health;
              health = 100;
          } else {
              health += num;
          }
          console.log(`You healed for ${num} hp.`);
          console.log(`Current health: ${health} hp.`);
  
      } else if( command === "chest"){
          coins = Number(num);
          allCoins = Number(coins);
          console.log(`You found ${coins} coins.`);
      } else {
          health -= num;
          if(health > 0){
              console.log(`You slayed ${command}.`);
          } else {
              console.log(`You died! Killed by ${command}.`);
              console.log(`Best room: ${roomsCount}.`);
              return;
          }
      }
    }
    console.log(`You've made it!", "Coins: ${allCoins}", "Health: ${health}".`);
  }
  dungeonDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);