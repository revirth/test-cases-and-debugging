let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["ab", "   b", " * f ? ", "     ", "123809184"];
let outputs = ["b", "b", "f", undefined, undefined];

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
  return str
    .split("")
    .reverse()
    .filter(x => x.toLowerCase() !== x.toUpperCase())[0];
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
console.log("All tests passed for " + __filename);
