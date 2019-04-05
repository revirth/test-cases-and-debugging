let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [[], [6, 6, 6], ["a", 6, verifyEquals, 6, 6], Array(3).fill(6), 0];

let outputs = [0, 18, 18, 18, 0];

/*
Make this function return the sum of all the numbers in the input array. If any element in the array is not a number, skip it. 
If the array is empty, return zero.
*/
function f(arr) {
  if (Array.isArray(arr) === false || arr.length === 0) return 0;

  return arr.filter(n => !isNaN(n)).reduce((a, b) => a + b);
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
