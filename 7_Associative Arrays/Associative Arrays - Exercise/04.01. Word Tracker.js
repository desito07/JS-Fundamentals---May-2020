function solve(input){
    let wordsNeeded = input.shift().split(' ');
    // console.log(wordsNeeded);
        
    let words = {};

    wordsNeeded.forEach(word => {
        words[word] = 0;
    });

    input
        .slice(1)
        .forEach(line => {
            if(Object.keys(words).includes(line)){
                words[line]++;
            }                        
        });
    // console.log(words);
    // let wordsKeys = Object.keys(words);
    // let sorted = wordsKeys.sort((a, b) => words[b] - words[a]);
    // console.log(sorted);
    for(let key of Object.keys(words).sort((a, b) => words[b] - words[a])){        
        console.log(`${key} - ${words[key]}`);        
    }
}
