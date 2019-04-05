// pro tip: use nodemon instead of node
let verifyEquals = require("./verify-equals.js");

// we need 6 test cases.
let inputs = [
  ["add", 10, 20],
  ["chair", 20, 10],
  ["sub", 10, 20],
  ["mult", 10, 20],
  [10, "mult", 20],
  ["mult", 10, 20, 30, 40]
];

let outputs = [30, undefined, -10, 200, undefined, undefined];

/*
The function takes an array. The array has length 3. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if (Array.isArray(arr) === false || arr.length !== 3) return undefined;

  let op = arr[0];
  let nA = arr[1];
  let nB = arr[2];

  if (
    typeof op !== "string" ||
    Number.isSafeInteger(nA) === false ||
    Number.isSafeInteger(nB) === false
  )
    return undefined;

  return op === "add"
    ? nA + nB
    : op === "sub"
    ? nA - nB
    : op === "mult"
    ? nA * nB
    : undefined;
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
console.log("All tests passed for " + __filename);
