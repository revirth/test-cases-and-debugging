let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [
  "hello",
  "how are you",
  "abcd",
  "",
  "i ekil siht margorp yrev hcum"
];

let outputs = [
  "olleh",
  "uoy era woh",
  "dcba",
  "",
  "much very program this like i"
];

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use at least one for loop for this exercise.

HINTS: 
 - Create an empty array
 - Add each character of the string to that empty array (use the array method push). You'll need to use a for loop
 - Create another empty array
 - Add each character of the string to new empty array in reverse order
 - Convert that array back to a string (use the join array method)
 
*/
function f(str) {
  return str
    .split("")
    .reverse()
    .join("");
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
