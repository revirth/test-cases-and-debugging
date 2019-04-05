let verifyEquals = require("./verify-equals.js");

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["hello", 4],
  ["", 2],
  ["abc", 0],
  [0, "abc"],
  [123, 2],
  [verifyEquals, 2],
  ["Hangry!!!!!", 0],
  ["Hangry!!!!!", 0, 1, 2, 3, 99]
];

let outputs = ["o", undefined, "a", undefined, undefined, undefined, "H", "H"];

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  // if (Array.isArray(arr) === false || arr.length !== 2) return undefined; // too strict ?

  if (Array.isArray(arr) === false || arr.length < 2) return undefined;

  let str = arr[0];
  let idx = arr[1];

  if (typeof str !== "string" || Number.isNaN(idx)) return undefined;

  return str[idx];
}

function runTest(i) {
  let expected = outputs[i];
  let input = inputs[i];
  let actual = f(input);

  console.log(i, actual, expected, actual === expected);

  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("All tests passed for " + __filename);
