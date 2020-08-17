function solve(input){
    let message = input.shift();

    for(let i = 0; i < input.length; i++){
        let [command, firstArg, secondArg] = input[i].split(' ');
        // console.log(command);
        switch(command){
            case "Replace":
                for(let i = 0; i < message.length; i++){
                if(message.includes(firstArg)){                    
                    message = message.replace(firstArg, secondArg);             
                   }
                }
                console.log(message);
                break;
            case "Cut":
                index1 = Number(firstArg);
                index2 = Number(secondArg);
                let temp = ''; 
                if((index1 >= 0 && index1 < message.length) && (index2 >= 0 && index2 < message.length)){ 
                    temp = message.substring(index1, index2 + 1);
                    message = message.replace(temp, '');
                    console.log(message);
                } else {
                    console.log("Invalid indexes!");
                }
                break;
            case "Make":
                if(firstArg === "Upper"){
                    message = message.toUpperCase();
                    console.log(message);
                } else if(firstArg === "Lower"){
                    message = message.toLowerCase();
                    console.log(message);
                }
                break;
            case "Check": 
            if(message.includes(firstArg)){
                console.log(`Message contains ${firstArg}`);
            } else {
                console.log(`Message doesn't contain ${firstArg}`);
            }
                break;
            case "Sum":
                index1 = Number(firstArg);
                index2 = Number(secondArg);
                let temp1 = '';
                let sum = 0; 
                if((index1 >= 0 && index1 < message.length) && (index2 >= 0 && index2 < message.length)){
                    temp1 = message.substring(index1, index2 + 1);
                    // console.log(temp1);
                    for(let i = 0; i < temp1.length; i++){ 
                        let asciiValue = temp1.charCodeAt(i);
                    // console.log(asciiValue);              
                        if(asciiValue >= 65 && asciiValue <= 122){
                            sum += asciiValue;
                        }
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indexes!");
                }
                break;
            case "Finish":
                break;
        }
    }    
}
solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  );
  solve([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish'
  ]);