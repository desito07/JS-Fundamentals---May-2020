function solve(input) {
    let num = input.shift();
    // console.log(num);
    
   for(let line of input){   
    let pattern = /(@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)/;
       let match = pattern.exec(line);
       let result = '';       
       if(match){
            let barcode = match.groups.barcode;        
            for(let element of barcode){
                if(element.charCodeAt() >= 48 && element.charCodeAt() <= 57){
                    // от 48=0 до 57=9 в ascii table
                    result += element;
                }
            }
            if(result === ''){
                result = '00';
            }
            console.log(`Product group: ${result}`);
        } else {
           console.log('Invalid barcode');
       }
   }
}
solve(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);