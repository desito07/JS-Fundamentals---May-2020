function solve(word, text){ 
    let words = word.split(', ').sort((a, b) => b.length - a.length);   
    // console.log(words);    
    words.forEach(element => {
        text = text.replace('*'.repeat(element.length), element);        
    });        
console.log(text);     
}
solve('great',
'softuni is ***** place for learning new programming languages'
);
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);
