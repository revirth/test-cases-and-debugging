let verifyEquals = require("./verify-equals.js");

// we need 7 test cases.
let inputs = [
  ["foo", 3],
  ["fo", 3],
  ["foo", -1],
  ["foo", 0],
  [3, verifyEquals],
  [1, 2, 3, 4, 5, 6, 7],
  ["Hangry!!!!", -1 * -1]
];

let outputs = [
  "foofoofoo",
  "fofofo",
  "",
  "",
  undefined,
  undefined,
  "Hangry!!!!"
];

/*
The function input is an array as input. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
  if (Array.isArray(arr) === false || arr.length !== 2) return undefined;

  let str = arr[0];
  let num = arr[1];

  if (typeof str !== "string" || Number.isSafeInteger(num) === false)
    return undefined;

  return num > 0 ? str.repeat(num) : "";
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
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);
