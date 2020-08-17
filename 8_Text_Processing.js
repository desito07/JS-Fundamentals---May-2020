// ================================================
// Lab JS: Text Processing
// ************************************************
// let text = 'first' + ', ';
// text += 'Word';
// console.log(text);

// let first = 'some, ';
// let second = 'word!';
// let result = first.concat(second);
// console.log(result);

// let text = 'I am JavaScriptJava developerJava';
// let word = 'Java';
// let index = text.indexOf(word);
// while(index >= 0){
//     console.log(index);
//     index = text.indexOf(word, index + 1);    
// }

// let result = text.indexOf(word);
// console.log(result);

// let text = 'I love fruits';

// if(text.includes('love')){
//     console.log('There is love');    
// }

// let word = 'la';

// let result = word.repeat(10);
// console.log(result);

// ===================================================
// Задачи от лаб-а
//  1 ************************************************
// function solve(str){
//     // for(let i = 0; i < str.length; i++){
//     //     console.log(str[i]);        
//     for(let element of str){
//         console.log(element);        
//     }
// }
// solve('AWord');
//  2 ************************************************
// function solve(word, text){
//     // let result = text.replace(word, '');

//     while(text.indexOf(word) > -1){
//         text = text.replace(word, '');        
//     }  
//     console.log(text); 
// } 
// solve('ice', 'kicegiciceeb');
// 3 **************************************************
// function solve(string, startIndex, count){
//     console.log(string.substring(startIndex, startIndex + count));
// }
// solve("ASentance", 1, 8);
// 4 **************************************************
// function solve(text, word){
//     while(text.includes(word)){
//         text = text.replace(word, '*'.repeat(word.length));
//     }
//     console.log(text);    
// }
// solve("A small sentence with some words", "small");
//  5 **************************************************
// function solve(text, word){
//     let count = 0;
//     let index = text.indexOf(` ${word}`);
//  while(index > -1){
//     count++; 
//     index = text.indexOf(` ${word} `, index + 1);   
//  }
//  if(text.startsWith(word)){
//      count++;
//  }
//  if(text.endsWith(word)){
//      count++;
//  }
//  console.log(count); 
// }
// solve("This is a word and it also is a sentence",
// "is"
// );
//  6 ***********************************************
// function solve(input){
//     // let result = text.split(' ');
//     // for(let el of result){
//     //     console.log(el);        
//     // }
//     // let map = new Map();
//     // map.set('a', 1);
//     // map.set('b', 2);
//     // map.set('c', 3);
//     // map.set('d', 4);
//     // let iterator = map.keys();
//     let words = input.split(' ');
//     let iterator = {
//         next: function(){
//             let isDone = words.length === 0;
//             let currentWord = words.shift();

//             return {
//                 value: currentWord,
//                 done: isDone,
//             };
//         }
//     };
//     let nextElement = iterator.next();        
    
//     while(!nextElement.done){
//         console.log(nextElement.value);

//         nextElement = iterator.next();
//     } 
//     // nextElement = iterator.next();        
//     // console.log(nextElement);

//     // nextElement = iterator.next();        
//     // console.log(nextElement);

//     // nextElement = iterator.next();        
//     // console.log(nextElement);

//     // nextElement = iterator.next();        
//     // console.log(nextElement);
    
//     // console.log(map.keys());    
// }
// solve("Et cillum do voluptate cillum ut cupidatat aliqua.");
// 7 ************************************************
// function solve(input){

//     let password = input.shift();
//     let tempPassword = '';

//     for(let i = 0; i < input.length; i++){
//         let [command, firstArgument, secondArgument] = input[i].split(' ');
        
//         switch(command){
//             case "TakeOdd": 
//                 tempPassword = '';                 
//                 for(let i = 0; i < password.length; i++){                 
//                     if(i % 2 !== 0){
//                         tempPassword += password[i];
//                     }                                 
//                 }
//                 console.log(tempPassword); 
//                 password = tempPassword;                
//                 break;
//             case "Cut":
//                 index = Number(firstArgument);
//                 length = Number(secondArgument);
//                 let substring = password.substring(index, index + length);
//                 password = password.replace(substring, '');
//                 console.log(password);                 
//                 break;
//             case "Substitute":
//                 tempPassword = password;

//                 while(tempPassword.includes(firstArgument)){
//                     tempPassword = tempPassword.replace(firstArgument, secondArgument);
//                 }
//                     if(password.includes(firstArgument)){                   
//                         console.log(tempPassword);                        
//                     } else {
//                         console.log('Nothing to replace!');              
//                     }                
//                 password = tempPassword; 
//             case "Done":
//                 break;               
//             }     
//     }
//     console.log(`Your password is: ${password}`);    
// }
// solve([
//     'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
//     'TakeOdd',
//     'Cut 15 3',
//     'Substitute :: -',
//     'Substitute | ^',
//     'Done'
//   ]);
// ********************************************************
// ========================================================
// //  Exercise JS: Text Processing
// 1 ******************************************************
// function solve(word, text){ 
//     let words = word.split(', ').sort((a, b) => b.length - a.length);   
//     // console.log(words);    
//     words.forEach(element => {
//         text = text.replace('*'.repeat(element.length), element);        
//     });        
// console.log(text);     
// }
// solve('great',
// 'softuni is ***** place for learning new programming languages'
// );
// solve('great, learning',
// 'softuni is ***** place for ******** new programming languages'
// );
// 2 **********************************************************
// function solution(inputString) {
 
//         let words = inputString.split(' ');
     
//         let wordsWithHashtag = words.filter((word) => word.startsWith('#') && word.length > 1);
     
//         let validWord = wordsWithHashtag
//             .filter((word) => {
//                 let characters = word.split('').slice(1);
//                 return (characters.every((char) => isLower(char) || isUpper(char)));
//             })
//             .map((word) => word.substring(1));
     
//         console.log(validWord.join('\n'))
     
     
//         function isLower(char) {
//             let asciiValue = char.charCodeAt(0);
//             return asciiValue >= 97 && asciiValue <= 122;
//         }
     
//         function isUpper(char) {
//             let asciiValue = char.charCodeAt(0);
//             return asciiValue >= 65 && asciiValue <= 90;
//         }
//     }
//     solution('Nowadays everyone uses # to tag a #special word in #socialMedia');
// 3 **********************************************************
// function solve(text){
//     let texts = text.split('\\');      
//     let sub = texts[texts.length - 1];    
//     let subs = sub.split('.');    
//     let file = subs[0];
//     let ext = subs[subs.length - 1];
//     console.log(`File name: ${file}`);
//     console.log(`File extension: ${ext}`);    
// }
// solve('C:\\Internal\\training-internal\\Template.pptx');
// solve('C:\\Projects\\Data-Structures\\LinkedList.cs');

// function solution(inputString){
//     let lastIndexOfDashes = inputString.lastIndexOf('\\');
//     // console.log(lastIndexOfDashes);
//     let fileInfo = inputString.substring(lastIndexOfDashes + 1);
//     // console.log(fileInfo);
//     let lastIndexOfDot = fileInfo.lastIndexOf('.');
//     let file = fileInfo.substring(0, lastIndexOfDot);
//     let ext = fileInfo.substring(lastIndexOfDot + 1);
//     console.log(`File name: ${file}`);   
//     console.log(`File extension: ${ext}`);       
// }
// solution('C:\\Internal\\training-internal\\Template.pptx');
// 4 ************************************************************
// function solve(word, text){
//     let wordLowerCase = word.toLowerCase();
//     text = text.toLowerCase();
//     // console.log(word);
//     // console.log(text);
    
//     if(text.split(' ').includes(wordLowerCase)){
//         console.log(word);       
//     } else {
//         console.log(`${word} not found!`); 
//     }                                           
// }        
// solve('javascript',
// 'JavaScript is the best programming language'
// );
// solve('python',
// 'JavaScript is the best programming language'
// );
// 5 ************************************************
// function solve(text){
//     let texts = text.split('');
//     // console.log(texts);
//     let str = '';
//     for(let i = 0; i < texts.length; i++){        
//         if(texts[i] !== texts[i + 1]){
//             str += texts[i];                                        
//         }
//      }
//      console.log(str);
// }
// solve('aaaaabbbbbcdddeeeedssaa');
//  6 ************************************************
// function solve(inputString){
//     let indexes = [];
//     let characters = inputString.split('');
//     for(let index in characters){
//         let char = characters[index];
//         let asckiiValue = char.charCodeAt(0);
//         if(asckiiValue >= 65 && asckiiValue <= 90){
//             indexes.push(Number(index));
//         }
//     }    
//     let words = [];
//     for(let i = 0; i < indexes.length; i++){      
//         words.push(inputString.substring(indexes[i], indexes[i + 1]));
//     } 
//     console.log(words.join(', '));     
// }
// solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
// 7 ************************************************
// function solve(inputString){
//     let half = inputString.length / 2;
//     // console.log(half);
//     let leftPart = inputString.substr(0, half);
//     let rightPart = inputString.substr(half, half);
//     // console.log(leftPart);
//     // console.log(rightPart);
//     console.log(reverseString(leftPart));
//     console.log(reverseString(rightPart));

//     function reverseString(string){
//         let newString = '';
//         for(let i = string.length - 1; i >= 0; i--){
//             newString += string[i];
//         }
//         // console.log(newString);
//         return newString;       
//     }
// }
// solve('tluciffiDsIsihTgnizamAoSsIsihT');
// ******************************************************
// ======================================================
