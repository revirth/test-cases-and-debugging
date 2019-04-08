let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = ["RADAR", "JAVASCRIPT", "", "ab", "amanaplanacanalpanama"];

let outputs = [true, false, undefined, false, true];

/*
Make this function return true if the input string is a palindrome, and false otherwise. 
A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
  if (typeof str !== "string" || str.trim().length === 0) return undefined;

  // Jacques
  for (let i = 0; i < str.length; i++)
    if (str[i] !== str[str.length - i - 1]) return false;

  return true;

  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
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
