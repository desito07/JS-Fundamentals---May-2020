function solve(word, text){
    // let result = text.replace(word, '');

    while(text.indexOf(word) > -1){
        text = text.replace(word, '');        
    }  
    console.log(text); 
} 
solve('ice', 'kicegiciceeb');
