// ================================================
// Lab JS: RegEx
// ************************************************
// метод test(string text) връща true or false
// let text = 'Today is 2015-05-11';
// let regex = /\d{4}-\d{2}-\d{2}/g;

// let containsValidDate = regex.test(text);
// console.log(containsValidDate);
// ************************************************
// метод match(regex) - returns array of all matches(strings)
// let text = 'Peter: 123 Mark: 456';
// let regex = /([A-Z][a-z]+): (\d+)/g;
// let matches = text.match(regex);

// console.log(matches.length); //2
// console.log(matches[0]); //Peter: 123
// console.log(matches[1]); //Mark: 456
// ***********************************************
// метод exec(string text) - works with a pointer and returns groups
// let text = 'Peter: 123 Mark: 456';
// let regex = /([A-Z][a-z]+): (\d+)/g;
// let firstMatch = regex.exec(text);
// let secondMatch = regex.exec(text);

// console.log(firstMatch[0]); //Peter: 123
// console.log(firstMatch[1]); //Peter
// console.log(firstMatch[2]); //123
// console.log(secondMatch[0]); //Mark: 456
// console.log(secondMatch[1]); //Mark
// console.log(secondMatch[2]); //456
// *************************************************
// метод replace(regex, string replacement) -  Replaces all strings that match the pattern with the provided replacement
// let text = 'Peter: 123 Mark: 456';
// let replacement = '999';
// let regex = /\d{3}/g;
// let result = text.replace(regex, replacement);
// console.log(result); //Peter: 999 Mark: 999
// ************************************************
// метод split(regex) - Splits the text by the pattern,Returns an array of strings
// let text = '1  2 3      4';
// let regex = /\s+/g;
// let result = text.split(regex);
// console.log(result); //[ '1', '2', '3', '4' ]
// *************************************************

// 1 ***********************************************
// function solve(input){
//      let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
//      let validNames = [];
//      let validName = null;
//      while((validName = pattern.exec(input)) !== null){
//          validNames.push(validName[0]);
//      }
//      console.log(validNames.join(' '));
// }
// solve(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov']);
// 2 *************************************************
// function solve(input){
//     let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
//     let validPhones = [];
//     let validPhone = null;
//     while((validPhone = pattern.exec(input)) !== null){
//         validPhones.push(validPhone[0]);
//     }
//     console.log(validPhones.join(', '));
// }
// solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
// 3 ****************************************************
// function solve(input){
//     let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
//     let validDate = null;
//     while((validDate = pattern.exec(input)) !== null){
//         let day = validDate.groups['day'];
//         let month = validDate.groups['month'];
//         let year = validDate.groups['year'];
//         console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
//     }
// }
// solve(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016']);
// ======================================================
// Exercises: JS: RegEx
// 1 ****************************************************
// function solve(input){    
// // console.log(input);
//     let sum = 0;
//     console.log(`Bought furniture:`);
// for(const line of input){
//     const pattern = />>(.+)<<([\d]+\.?[\d]+)!([\d]+)/g;
// // console.log(line);  
// const matches = pattern.exec(line);
// if(matches){
//     let name = matches[1];
//     let currentSum = Number(matches[2]) * Number(matches[3]);
//     console.log(name);
//     sum += currentSum;
//     }
// }                 
//     console.log(`Total money spend: ${sum.toFixed(2)}`);       
// }
// solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);
// 2 ******************************************************
// function solve(input){
//     let participants = input.slice(0, 1)[0].split(', ');
//     let racers = {};

//     for(let lineRace of input.slice(1)){
    
//     const namePattern = /[A-Za-z]/g;
//     const digitsPattern = /\d/g;

//     const matchedName = lineRace.match(namePattern);
//     const matchedDigit = lineRace.match(digitsPattern);

//         if(matchedName && matchedDigit){
//             const name = matchedName.join('');
//             if(participants.includes(name)){
//                     const distance = matchedDigit.map(Number).reduce((a, b) => a+b, 0);
//                         if(!racers[name]){
//                             racers[name] = 0;
//                         }
//                     racers[name] += distance;
//             }
//         }
//     }
//     Object.keys(racers)
//         .sort((a,b) => racers[b] - racers[a])
//         .slice(0, 3)
//         .forEach((racer, index) => {
//             switch(index){
//                 case 0: 
//                 console.log(`1st place: ${racer}`);
//                 break;
//                 case 1:
//                 console.log(`2nd place: ${racer}`);
//                 break;
//                 case 2: 
//                 console.log(`3rd place: ${racer}`);
//                 break;                
//             }
//         });    
// }
// solve([
//     'George, Peter, Bill, Tom',
//     'G4e@55or%6g6!68e!!@',
//     'R1@!3a$y4456@',
//     'B5@i@#123ll',
//     'G@e54o$r6ge#',
//     '7P%et^#e5346r',
//     'T$o553m&6',
//     'end of race'
//   ]
//   );
// 3 ***************************************************
// function solve(input){
//     let income = 0;    
    
//     for(let line of input){
//             let pattern = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d+)\$/gm;
//             let element = pattern.exec(line);
//         if(element){
//             let price = (+element[3]) * (+element[4]);
//             console.log(`${element[1]}: ${element[2]} - ${price.toFixed(2)}`);
//             income += price;            
//         }
//     }
//     console.log(`Total income: ${income.toFixed(2)}`);
// }
// solve([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
//   ]
//   );
//   ********************************************************