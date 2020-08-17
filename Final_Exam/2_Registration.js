function solve(input){
    let num = input.shift();
    let count = 0;    
    // console.log(num);       
    for(let line of input){
        let pattern = /(U\$)(?<username>[A-Z][a-z]{2,})\1(P\@\$)(?<password>[A-Za-z]{5,}\d+)\3/g;
        let match = pattern.exec(line);
          
        if(match){
            let username = match.groups.username;
            let password = match.groups.password;
            console.log('Registration was successful');
            console.log(`Username: ${username}, Password: ${password}`);
            count++
        } else {
            console.log('Invalid username or password');        
        }    
    }
    console.log(`Successful registrations: ${count}`);
}
solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ]
  );