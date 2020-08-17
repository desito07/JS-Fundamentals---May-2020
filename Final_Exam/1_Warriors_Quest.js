function solve(input){
    let codeHidden = input.shift();

    for(let i = 0; i < input.length; i++){
        let [command, firstArg, secondArg, thirdArg] = input[i].split(' ');        
        // console.log(command);
        switch(command){            
            case "GladiatorStance":
                codeHidden = codeHidden.toUpperCase();
                console.log(codeHidden);                
                break;
            case "DefensiveStance":
                codeHidden = codeHidden.toLowerCase();
                console.log(codeHidden); 
                break;
            case "Dispel":
                index = Number(firstArg);                                
                if(index >= 0 && index < codeHidden.length){
                    let substr = codeHidden.substring(index, index + 1);
                    codeHidden = codeHidden.replace(substr, secondArg);
                    // console.log(codeHidden);                    
                    console.log("Success!");                    
                } else {
                    console.log("Dispel too weak.");                    
                }
                break;
            case "Target":
                if(firstArg === "Change"){ 
                    for(let i = 0; i < codeHidden.length; i++){                          
                    codeHidden = codeHidden.replace(secondArg, thirdArg);
                    }
                    console.log(codeHidden);
                } else if(firstArg === "Remove"){
                    for(let i = 0; i < codeHidden.length; i++){                    
                    codeHidden = codeHidden.replace(secondArg, '');
                    }
                    console.log(codeHidden);                    
                }  else {
                    console.log("Command doesn't exist!");                    
                }              
                break;
                case "For":
                    if(codeHidden.includes(firstArg)){
                    break;
                    }
                break;
                default:
                    console.log("Command doesn't exist!");   
                    break;
        }                 
    }   
}
solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
  ]
  );
  solve([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
  ]
  );