function solution(inputString) {
 
        let words = inputString.split(' ');
     
        let wordsWithHashtag = words.filter((word) => word.startsWith('#') && word.length > 1);
     
        let validWord = wordsWithHashtag
            .filter((word) => {
                let characters = word.split('').slice(1);
                return (characters.every((char) => isLower(char) || isUpper(char)));
            })
            .map((word) => word.substring(1));
     
        console.log(validWord.join('\n'))
     
     
        function isLower(char) {
            let asciiValue = char.charCodeAt(0);
            return asciiValue >= 97 && asciiValue <= 122;
        }
     
        function isUpper(char) {
            let asciiValue = char.charCodeAt(0);
            return asciiValue >= 65 && asciiValue <= 90;
        }
    }
    solution('Nowadays everyone uses # to tag a #special word in #socialMedia');
