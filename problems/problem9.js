let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [
  "hey hello morning",
  "",
  "The quick brown fox jumped over the lazy dog",
  "May the force be with you",
  "a b c d "
];

let outputs = ["morning", "", "jumped", "force", "d"];

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  return str
    .trim()
    .split(" ")
    .reduce((a, b) => (a.length > b.length ? a : b));
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
