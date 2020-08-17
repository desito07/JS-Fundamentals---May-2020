function solve(input){
    let text = input.shift();

    let pattern = /([:]{2}|[*]{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let match = pattern.exec(text);

    let counter = 0;
    let coolest = [];    
    let total =  text.match(/\d/g).map(Number).reduce((a, b) => a * b);

    while(match !== null){    
        counter++;            
        let currentSum = 0;
         
        let name = match.groups.name;        
            for(let char of name.split('')){
                currentSum += char.charCodeAt(0); 
            }
            if(currentSum > total){
                coolest.push(match[0]);
            }
            match = pattern.exec(text);        
    }
    console.log(`Cool threshold: ${total}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);

    if(coolest.length > 0){
        coolest.forEach(x => console.log(x));
    }    
}
solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);
solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::']);
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);