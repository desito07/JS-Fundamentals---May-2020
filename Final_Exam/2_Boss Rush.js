function solve(input) {
    let num = input.shift();
    // console.log(num);    
    for(let line of input){
        let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
        let match = pattern.exec(line);
        if(match){
            console.log(match.groups.boss +', ' + 'The ' + match.groups.title);
            console.log(`>> Strength: ${match.groups.boss.length}`);
            console.log(`>> Armour: ${match.groups.title.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}
solve([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
  ]
  );