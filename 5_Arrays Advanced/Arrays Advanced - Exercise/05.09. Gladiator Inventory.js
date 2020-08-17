gladiatorInventory0 = input => {
  'use strict'
 
  let games = input.shift().split(' ');
  //let stop = false;
  let index;
 
  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(' ');
 
    switch (command[0]) {
      /* case undefined:
        console.log(games.join(' '));
        stop = true;
        break;
 */
      case 'Buy':
        index = games.indexOf(command[1]);
 
        if (index === -1) {
          games.push(command[1]);
        }
        break;
 
      case 'Trash':
        index = games.indexOf(command[1]);
 
        if (index !== -1) {
          games.splice(index, 1);
        }
        break;
 
      case 'Repair':
        index = games.indexOf(command[1]);
 
        if (index !== -1) {
          let updated = games.splice(index, 1);
          games.push(updated[0]);
        }
        break;
 
      case 'Upgrade':
 
        let expansion = command[1].split('-');
        index = games.indexOf(expansion[0]);
 
        if (index !== -1) {
          games.splice(index + 1, 0, `${expansion[0]}:${expansion[1]}`);
        }
        break;
    }
 
    /* if (stop) {
      break;
    } */
  }
  console.log(games.join(' '));
}
