let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["hello world", "ALL YOUR BASE ARE BELONG", "zzzz", "", "a"];

let outputs = ["Hello World", "All Your Base Are Belong", "Zzzz", "", "A"];

/*
Make this function return the input string, capitalized. You must use a for loop. For example:

f("hello world"); // Hello World
f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

HINT:
   - Use a for loop to capitalize the letters one by one
   - Use the toUpperCase string method

*/
function f(str) {
  if (str.trim().length === 0) return "";

  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(" ");
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
