function solve(input){
    let num = input.shift();
    // console.log(num);    
    for(let line of input){ 
        let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;       
        let match = pattern.exec(line);
        if(match){                      
            
            // console.log(message)
            let command = match.groups.command;
            let message = match.groups.message;
            let result = '';
            
            for(let ch of message){
                result += `${ch.charCodeAt(0)} `;
            }
            console.log(`${command}: ${result}`);
        } else { 
            console.log('The message is invalid')
        }
    }
}
solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);
solve(['3','go:[outside]','!drive!:YourCarToACarWash','!Watch!:[LordofTheRings]']);
solve(['3','!play!:[TheNewSong]','!Ride!:[Bike]','!Watch!:[LordofTheRings]']);
  