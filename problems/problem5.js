let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [[2, 7], ["a", 7], [verifyEquals, 7], [1, 2, 3, 4], 444];

let outputs = [14, undefined, undefined, undefined, undefined];

/*
The input of the function is an array.
Make this function return the product of the two numbers in the array. 
If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if (
    Array.isArray(input) === false ||
    input.length !== 2 ||
    input.some(n => isNaN(n))
  )
    return undefined;

  return input.reduce((a, b) => a * b);
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);

  console.log(actual, expected, actual === expected);

  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("All tests passed for " + __filename);
