/**
 * Calculator Utility
 * Includes operations, memory, and history tracking
 */

// ==========================
// CORE OPERATIONS
// ==========================

/**
 * Add two numbers
 */
function add(a, b) {
  const result = a + b;
  addToHistory(`${a} + ${b}`, result);
  return result;
}

/**
 * Subtract two numbers
 */
function subtract(a, b) {
  const result = a - b;
  addToHistory(`${a} - ${b}`, result);
  return result;
}

/**
 * Multiply two numbers
 */
function multiply(a, b) {
  const result = a * b;
  addToHistory(`${a} * ${b}`, result);
  return result;
}

/**
 * Divide two numbers
 */
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero");
    return null;
  }

  const result = a / b;
  addToHistory(`${a} / ${b}`, result);
  return result;
}

/**
 * Exponent
 */
function exponent(a, b) {
  const result = a ** b;
  addToHistory(`${a} ^ ${b}`, result);
  return result;
}

/**
 * Square Root
 */
function squareRoot(a) {
  if (a < 0) {
    console.log("Cannot calculate square root of negative number");
    return null;
  }

  const result = Math.sqrt(a);
  addToHistory(`√${a}`, result);
  return result;
}

// ==========================
// MEMORY FUNCTIONS
// ==========================

let memory = 0;

/**
 * Store value in memory
 */
function storeMemory(value) {
  memory = value;
  console.log("Stored in memory:", memory);
}

/**
 * Recall memory
 */
function recallMemory() {
  console.log("Memory value:", memory);
  return memory;
}

/**
 * Clear memory
 */
function clearMemory() {
  memory = 0;
  console.log("Memory cleared");
}

// ==========================
// HISTORY FUNCTIONS
// ==========================

const history = [];

/**
 * Add operation to history
 */
function addToHistory(operation, result) {
  history.push(`${operation} = ${result}`);

  if (history.length > 10) {
    history.shift(); // keep only last 10
  }
}

/**
 * Display history
 */
function showHistory() {
  console.log("Calculator History:");
  history.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

/**
 * Clear history
 */
function clearHistory() {
  history.length = 0;
  console.log("History cleared");
}

// ==========================
// TESTING
// ==========================

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(6, 2));
console.log(divide(8, 2));
console.log(exponent(2, 3));
console.log(squareRoot(25));

storeMemory(100);
recallMemory();
clearMemory();

showHistory();