let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 5 test cases. I provided 1 input
let inputs = ['ab', "", " b", "   e d", "?f"]
let outputs = ['a', undefined, 'b', 'e', 'f']
let isLetter = x => x.toLowerCase() !== x.toUpperCase();

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        if( isLetter(ch) ) return ch;
    }

    return undefined;
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);

    console.log(actual, expected, actual === expected)

    verifyEquals(expected, actual) // verifyEquals is imported above
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
