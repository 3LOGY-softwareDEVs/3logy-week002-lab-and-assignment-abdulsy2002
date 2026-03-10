LAB-07 Bug Fixes
Bug #1: Syntax Error

Error Type: Syntax Error

Problem Explanation

The function greet is missing a closing curly brace }.
Because of this, JavaScript cannot correctly parse the function block and throws a syntax error.

Fixed Code

function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Alice");
How I Debugged It

Ran the code in the console

JavaScript reported a syntax error

Checked the function block and noticed the missing }

Bug #2: Off-by-One Error

Error Type: Logical Error

Problem Explanation

The loop runs 10 times, but the array only has 5 elements.
When i becomes 5 or greater, numbers[i] does not exist, so it prints undefined.

Fixed Code
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
How I Debugged It

Observed that undefined was printed

Checked the loop condition

Replaced 10 with numbers.length

Bug #3: Logical Error

Error Type: Logical Error

Problem Explanation

The function checks if n % 2 === 1.
This actually checks if the number is odd, not even.

Fixed Code
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4)); // true
How I Debugged It

Tested the function with 4

Result was incorrect

Realized the condition checks for odd numbers

Bug #4: Type Conversion

Error Type: Runtime / Type Conversion Error

Problem Explanation

userInput is a string, so using + performs string concatenation instead of addition.

Example:

"5" + 10 = "510"
Fixed Code
const userInput = "5";
const result = Number(userInput) + 10;

console.log(result); // 15
How I Debugged It

Noticed the output "510"

Checked the data type of userInput

Converted the string to a number using Number()

Bug #5: Undefined Property

Error Type: Runtime / Logical Error

Problem Explanation

When the array is empty, items[0] and items[items.length - 1] return undefined.

Fixed Code
function getFirstAndLast(items) {
  if (items.length === 0) {
    return { first: null, last: null };
  }

  const first = items[0];
  const last = items[items.length - 1];

  return { first, last };
}

const result = getFirstAndLast([]);
console.log(result);
How I Debugged It

Tested the function with an empty array

Saw undefined values

Added a condition to handle empty arrays

Summary

All bugs were fixed by:

Identifying error types

Testing the code

Checking logic and data types

Updating the code to handle edge cases

Debugging helps developers improve problem-solving and code reliability.

