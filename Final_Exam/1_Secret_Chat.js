function solve(input){
    let message = input.shift();

    for(let i = 0; i < input.length; i++){
        let [command, firstArg, secondArg] = input[i].split(':|:');
        // console.log(command);
        switch(command){
            case "InsertSpace":
                index = Number(firstArg); 
                let sub2 = message.substring(firstArg);
                let sub1 = message.substring('', firstArg);
                    // console.log(sub1);
                    // console.log(sub2);
                    message = `${sub1} ${sub2}`
                    console.log(message);                   
                break;
            case "Reverse":                
                if(message.includes(firstArg)){
                    let newString = '';
                    for(let i = firstArg.length - 1; i >= 0; i--){
                        newString += firstArg[i];
                    }   
                    // console.log(newString);                                  
                    message = message.replace(firstArg, '');
                    message = message.concat(newString);
                    console.log(message);                    
                } else {    
                    console.log("error");                    
                }
                break;
            case "ChangeAll":
                for(let i = 0; i < message.length; i++){
                    if(message.includes(firstArg)){
                        message = message.replace(firstArg, secondArg);
                    }
                }
                console.log(message);
                break;
            case "Reveal":
                break;
        }
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  );
  solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  );