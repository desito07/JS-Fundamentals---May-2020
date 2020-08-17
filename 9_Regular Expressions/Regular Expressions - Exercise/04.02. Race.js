function solve(input){
    let participants = input.slice(0, 1)[0].split(', ');
    let racers = {};

    for(let lineRace of input.slice(1)){
    
    const namePattern = /[A-Za-z]/g;
    const digitsPattern = /\d/g;

    const matchedName = lineRace.match(namePattern);
    const matchedDigit = lineRace.match(digitsPattern);

        if(matchedName && matchedDigit){
            const name = matchedName.join('');
            if(participants.includes(name)){
                    const distance = matchedDigit.map(Number).reduce((a, b) => a+b, 0);
                        if(!racers[name]){
                            racers[name] = 0;
                        }
                    racers[name] += distance;
            }
        }
    }
    Object.keys(racers)
        .sort((a,b) => racers[b] - racers[a])
        .slice(0, 3)
        .forEach((racer, index) => {
            switch(index){
                case 0: 
                console.log(`1st place: ${racer}`);
                break;
                case 1:
                console.log(`2nd place: ${racer}`);
                break;
                case 2: 
                console.log(`3rd place: ${racer}`);
                break;                
            }
        });    
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  );

