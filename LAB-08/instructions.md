# LAB-08: Higher-Order Functions

**Duration:** 35 minutes  
**Points:** 4  
**Due:** Thursday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

- Understand higher-order functions
- Pass functions as arguments
- Use callbacks effectively
- Create custom utility functions

---

## 📋 REQUIREMENTS

Create a JavaScript file demonstrating higher-order functions:

1. **Create Custom forEach:**
   - [ ] Create function `myForEach(array, callback)`
   - [ ] Loop through array and call callback for each item
   - [ ] Test with sample array

2. **Create Custom Filter:**
   - [ ] Create function `myFilter(array, testCallback)`
   - [ ] Return new array with items that pass test
   - [ ] Test with sample data

3. **Function as Return Value:**
   - [ ] Create function that returns another function
   - [ ] Example: `multiplier(factor)` returns function that multiplies by factor
   - [ ] Test the returned function

4. **Real-World Example:**
   - [ ] Create `processNumbers(numbers, operation)` function
   - [ ] Accept array and operation (add, multiply, etc.)
   - [ ] Return processed results

---

## 💻 EXAMPLE TEMPLATE

```javascript
// Custom forEach
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

// Test
myForEach([1, 2, 3], (item) => {
  console.log(item * 2);
});

// Function returning function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## 📤 SUBMISSION

1. Create `higher-order.js` in the `LAB-08/code/` folder
2. Complete all requirements
3. Test all functions
4. Commit and push to GitHub
5. Check off items in `submission.md`
