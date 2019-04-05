let verifyEquals = require("./verify-equals.js");

// we need 5 test cases.
let inputs = [
  "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam",
  "----------------------------------------",
  "",
  "a b c d e f g h i j k l m n o p q r s tu v w x y z a b c d e f g h i j k l m n op q r s tu v w x y z",
  verifyEquals
];

let outputs = [
  "Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam",
  "----------------------------------------",
  "",
  "a b c d e f g h i j k l m n o p q r s tu\nv w x y z a b c d e f g h i j k l m n op\nq r s tu v w x y z",
  undefined
];

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
function f(str) {
  if (typeof str !== "string") return undefined;

  if (str.length <= 40) return str;

  let ret = [];

  while (str !== "") {
    ret.push(str.substr(0, 40));
    str = str.substr(41);
  }

  return ret.join("\n");
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
