function solve(input){
    let storage = {};
    input.forEach(line => {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);
        if(storage.hasOwnProperty(item)){
            let oldQuantity = storage[item];
            storage[item] = oldQuantity + quantity;            
        } else {
            storage[item] = quantity;
        }
    });
    let arr = Object.entries(storage);
    // console.log(storage);    
    for(let kvp of arr){
        console.log(`${kvp[0]} -> ${kvp[1]}`);        
    }
}
solve([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ]);
