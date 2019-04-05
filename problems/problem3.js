let verifyEquals = require("./verify-equals.js");

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [undefined, 3],
  [-3, undefined],
  [
    "a",
    function() {
      return "WTF";
    }
  ],
  [Number.MAX_VALUE, 1], // Number.MAX_VALUE is not Number.MAX_SAFE_INTEGER
  [Number.MAX_SAFE_INTEGER, 0]
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER

let outputs = [
  6,
  0,
  undefined,
  undefined,
  undefined,
  undefined,
  Math.pow(2, 53) - 1
];

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  // if (input.some(n => isNaN(n))) return undefined;

  if (input.some(n => !Number.isSafeInteger(n))) return undefined;

  return input.reduce((a, b) => a + b);
}

function runTest(i) {
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
runTest(5);
runTest(6);
console.log("All tests passed for " + __filename);
