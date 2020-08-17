function solve(input){

    let password = input.shift();
    let tempPassword = '';
    let line = input.shift();

    while(line != 'Done'){
        let [command, firstArgument, secondArgument] = line.split(' ');
        
        switch(command){
            case "TakeOdd": 
                tempPassword = '';                 
                for(let i = 0; i < password.length; i++){                 
                    if(i % 2 !== 0){
                        tempPassword += password[i];
                    }                                 
                }
                console.log(tempPassword); 
                password = tempPassword;                
                break;
            case "Cut":
                index = Number(firstArgument);
                length = Number(secondArgument);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);                 
                break;
            case "Substitute":
                tempPassword = password;

                while(tempPassword.includes(firstArgument)){
                    tempPassword = tempPassword.replace(firstArgument, secondArgument);
                }
                    if(password.includes(firstArgument)){
                        console.log(tempPassword);                        
                    } else {
                        console.log('Nothing to replace!');              
                    }                
                password = tempPassword;                
            }   
    line = input.shift();
    }
    console.log(`Your password is: ${password}`);    
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]);
