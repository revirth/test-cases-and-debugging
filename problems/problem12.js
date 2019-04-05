let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [[[0, 1, 2, 3], [1, 3, 4, 5]], [[1, 2, 3], [1, 2, 3]], [2, 3], 2];

let outputs = [[0, 2, 4, 5], [], undefined, undefined];

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
*/
function f(input) {
  if (
    Array.isArray(input) === false ||
    input.length !== 2 ||
    input.every(arr => Array.isArray(arr)) === false
  )
    return undefined;

  ar1 = input[0];
  ar2 = input[1];
  ret = [];

  ar1.filter(n => ar2.includes(n) === false).forEach(n => ret.push(n));
  ar2.filter(n => ar1.includes(n) === false).forEach(n => ret.push(n));

  return ret;
}

function runTest(i) {
  if (i > inputs.length) throw new Error("You do not have enough test cases");
  let expected = outputs[i];
  let actual = f(inputs[i]);

  console.log(actual, expected);

  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("All tests passed for " + __filename);
