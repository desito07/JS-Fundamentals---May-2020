function solve(input){
    let num = input.shift();
    // console.log(num);
    for(let line of input){
        let pattern = /(.+)\>(?<numbers>\d{3})\|(?<lowerletters>[a-z]{3})\|(?<upperletters>[A-Z]{3})\|(?<symbols>.[^<][^>])\<\1/g;
        let match = pattern.exec(line);
        if(match){
            let numbers = match.groups.numbers;
            let lowerletters = match.groups.lowerletters;
            let upperletters = match.groups.upperletters;
            let symbols = match.groups.symbols;
            let result = numbers + lowerletters + upperletters + symbols;
            console.log(`Password: ${result}`);            
        } else {
            console.log('Try another password!');
        }
    }
}
solve(['3','##>00|no|NO|!!!?<###','##>123|yes|YES|!!!<##','$$<111|noo|NOPE|<<>$$']);
solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*']);
