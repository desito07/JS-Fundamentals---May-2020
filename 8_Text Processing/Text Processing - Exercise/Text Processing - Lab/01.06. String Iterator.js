function solve(input){
    // let result = text.split(' ');
    // for(let el of result){
    //     console.log(el);        
    // }
    // let map = new Map();
    // map.set('a', 1);
    // map.set('b', 2);
    // map.set('c', 3);
    // map.set('d', 4);
    // let iterator = map.keys();
    let words = input.split(' ');
    let iterator = {
        next: function(){
            let isDone = words.length === 0;
            let currentWord = words.shift();

            return {
                value: currentWord,
                done: isDone,
            };
        }
    };
    let nextElement = iterator.next();        
    
    while(!nextElement.done){
        console.log(nextElement.value);

        nextElement = iterator.next();
    } 
    // nextElement = iterator.next();        
    // console.log(nextElement);

    // nextElement = iterator.next();        
    // console.log(nextElement);

    // nextElement = iterator.next();        
    // console.log(nextElement);

    // nextElement = iterator.next();        
    // console.log(nextElement);
    
    // console.log(map.keys());    
}
solve("Et cillum do voluptate cillum ut cupidatat aliqua.");
