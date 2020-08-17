function solve(input){
    let income = 0;    
    
    for(let line of input){
            let pattern = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d+)\$/gm;
            let element = pattern.exec(line);
        if(element){
            let price = (+element[3]) * (+element[4]);
            console.log(`${element[1]}: ${element[2]} - ${price.toFixed(2)}`);
            income += price;            
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ]
  );
