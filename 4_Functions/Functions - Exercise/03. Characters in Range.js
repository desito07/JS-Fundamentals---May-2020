function getCharsInRange(start, end) {
    let characters = [];

    for (let i = (start + 1); i < end; i++) {
        let symbol = getCharValue(i);
        characters.push(symbol);
    }

    return characters;
}

function joinSymbols(arr, separator) {
    let result = "";
    for (let index in arr) {
        let character = arr[index];

        if (index <= (arr.length - 2)) {
            result += `${character}${separator}`;
        } else {
            result += character;
        }
    }
    return result;
}
}
charactersInRange("a", "d");