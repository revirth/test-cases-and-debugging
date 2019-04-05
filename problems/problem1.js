let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 5 test cases. I provided 1 input
let inputs = ['ab', "", " b"]

let outputs = ['a', undefined, 'b']

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
    return str.trim()[0];
}

function runTest(i) {
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual) // verifyEquals is imported above
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename)
