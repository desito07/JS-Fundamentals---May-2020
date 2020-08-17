function solve(input){
    let email = input.shift();

    for(let i = 0; i < input.length; i++){
        let [command, firstArg] = input[i]. split(' ');
        // console.log(command);
        
        switch(command){
            case "Make":
                if(firstArg === "Upper"){
                    email = email.toUpperCase();
                    console.log(email);
                } else if(firstArg === "Lower"){
                    email = email.toLowerCase();
                    console.log(email); 
                }                              
                break;
            case "GetDomain":
                count = Number(firstArg);
                let substr = email.substring(email.length - count);
                console.log(substr);                           
                break;
            case "GetUsername":
                let symbol = email.indexOf('@');
                if(email.includes('@')){
                    let result = email.substring(email[0], symbol); 
                    console.log(result);                    
                } else { 
                    console.log(`The email ${email} doesn't contain the @ symbol.`);    
                }
                break; 
            case "Replace":
                
                for(let i = 0; i < email.length; i++){
                email = email.replace(firstArg, '-');                  
                }   
                console.log(email);                          
                break;           
            case "Encrypt":
                let arr = [];
                for(let i = 0; i < email.length; i++){ 
                    let asciiValue = email.charCodeAt(i);
                    arr.push(asciiValue); 
                }               
                console.log(arr.join(' '));
                break;
            case "Complete":
                break;
        }
    }
}
solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
  ]
  );
solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
  ]
  );
  solve([
    'Another@Mail.com',
    'Make Lower',
    'GetUsername',
    'GetDomain 3',
    'Encrypt',
    'Complete'
  ]
  );