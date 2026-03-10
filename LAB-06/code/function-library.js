/**
 * Reverse a string
 * @param {string} text - Input string
 * @returns {string} Reversed string
 * @example
 * reverseString("hello"); // "olleh"
 */
function reverseString(text) {
  return text.split("").reverse().join("");
}

/**
 * Count words in a text
 * @param {string} text - Input sentence
 * @returns {number} Number of words
 * @example
 * countWords("Hello world"); // 2
 */
function countWords(text) {
  return text.trim().split(/\s+/).length;
}

/**
 * Check if a text is a palindrome
 * @param {string} text - Input string
 * @returns {boolean} True if palindrome
 * @example
 * isPalindrome("madam"); // true
 */
function isPalindrome(text) {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

/**
 * Check if a number is prime
 * @param {number} n - Input number
 * @returns {boolean} True if prime
 * @example
 * isPrime(7); // true
 */
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 * Calculate factorial of a number
 * @param {number} n - Input number
 * @returns {number} Factorial value
 * @example
 * factorial(5); // 120
 */
function factorial(n) {
  if (n < 0) return null;

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

/**
 * Return nth Fibonacci number
 * @param {number} n - Position in Fibonacci sequence
 * @returns {number} Fibonacci number
 * @example
 * fibonacci(6); // 8
 */
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

/**
 * Remove duplicate values from an array
 * @param {Array} arr - Input array
 * @returns {Array} Array without duplicates
 * @example
 * removeDuplicates([1,2,2,3]); // [1,2,3]
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

/**
 * Find median value of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Median value
 * @example
 * findMedian([1,2,3,4,5]); // 3
 */
function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
}

/**
 * Validate email format
 * @param {string} email - Email address
 * @returns {boolean} True if valid
 * @example
 * isValidEmail("test@mail.com"); // true
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Validate phone number
 * @param {string} phone - Phone number
 * @returns {boolean} True if valid
 * @example
 * isValidPhone("08012345678"); // true
 */
function isValidPhone(phone) {
  const regex = /^[0-9]{10,15}$/;
  return regex.test(phone);
}


/* =========================
   TESTING THE FUNCTIONS
   ========================= */

console.log(reverseString("hello"));
console.log(countWords("JavaScript is fun"));
console.log(isPalindrome("madam"));

console.log(isPrime(11));
console.log(factorial(5));
console.log(fibonacci(7));

console.log(removeDuplicates([1,2,2,3,4,4]));
console.log(findMedian([5,3,1,4,2]));

console.log(isValidEmail("user@email.com"));
console.log(isValidPhone("08012345678"));