function arrayManipulator(numArray, commandArray) {
    let command = commandArray.shift().split(' ');
   
    while (command[0] !== 'print') {
        let currentCommand = command[0];
 
        switch (currentCommand) {
            case 'add': {
                let index = command[1];
                let element = Number(command[2]);
                add(index, element, numArray);
                break;
            }
            case 'addMany': {
                command.shift();
                let elements = command.map(Number);
                let index = elements.shift();
                addMany(index, elements, numArray);
                break;
            }
            case 'contains': {
                let element = Number(command[1]);
                contains(element, numArray);
                break;
            }
            case 'remove': {
                let index = command[1];
                remove(index, numArray);
                break;
            }
            case 'shift': {
                let rotations = command[1];
                numArray = shift(rotations, numArray);
                break;
            }
            case 'sumPairs': {
                numArray = sumPairs(numArray);
                break;
            }
        }
 
        command = commandArray.shift().split(' ');
    }
 
    console.log(`[ ${numArray.join(', ')} ]`);
 
    function add(index, element, array) {
        return array.splice(index, 0, element);
    }
 
    function addMany(index, elements, array) {
        for (let element of elements) {
            array.splice(index, 0, element);
            index++;
        }
    }
 
    function contains(element, array) {
        if (array.includes(element)) {
            console.log(array.indexOf(element));
        } else {
            console.log(-1);
        }
    }
 
    function remove(index, array) {
        return array.splice(index, 1);
    }
 
    function shift(rotations, array) {
        let realRotations = rotations % array.length;
        let result = [];
 
        for (let i = 0; i < array.length; i++) {
            let currentElement = array[i];
 
            if (i >= realRotations) {
                result.push(currentElement);
            }
        }
 
        for (let j = 0; j < array.length; j++) {
            let currentElement = array[j];
 
            if (j < realRotations) {
                result.push(currentElement);
            } else {
                break;
            }
        }
 
        return result;
    }
 
    function sumPairs(array) {
        let result = [];
 
        for (let i = 0; i < array.length; i += 2) {
            let currentElement = array[i];
            let nextElement = array[i + 1];
            let currentSum = currentElement + nextElement;
            if (nextElement !== undefined) {
                result.push(currentSum);
            } else {
                result.push(currentElement);
            }
        }
 
        return result;
    }
}
