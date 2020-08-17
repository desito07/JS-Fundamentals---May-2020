function solve(input){
    let words = {};
  for(let word of input){
      if(words.hasOwnProperty(word)){
        words[word]++;
      } else {
      words[word] = 1;
      }  
  }  
// console.log(words);
let wordEntries = Object.entries(words);

let sortedWordEntries = wordEntries.sort((a, b) => {
    let wordCountA = a[1];
    let wordCountB = b[1];

    return wordCountB - wordCountA;    
});
// console.log(sortedWordEntries);
for(let kvp of sortedWordEntries){
    console.log(`${kvp[0]} -> ${kvp[1]} times`);    
}
}
solve([
    'Here',     'is',
    'the',      'first',
    'sentence', 'Here',
    'is',       'another',
    'sentence', 'And',
    'finally',  'the',
    'third',    'sentence'
  ]
  );

