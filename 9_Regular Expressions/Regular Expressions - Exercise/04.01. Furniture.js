function solve(input){    
// console.log(input);
    let sum = 0;
    console.log(`Bought furniture:`);
for(const line of input){
    const pattern = />>(.+)<<([\d]+\.?[\d]+)!([\d]+)/g;
// console.log(line);  
const matches = pattern.exec(line);
if(matches){
    let name = matches[1];
    let currentSum = Number(matches[2]) * Number(matches[3]);
    console.log(name);
    sum += currentSum;
    }
}                 
    console.log(`Total money spend: ${sum.toFixed(2)}`);       
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
