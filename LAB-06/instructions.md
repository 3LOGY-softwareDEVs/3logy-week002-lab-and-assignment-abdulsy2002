# LAB-06: Array Methods Practice

**Duration:** 35 minutes  
**Points:** 4  
**Due:** Tuesday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

- Use array methods: map, filter, reduce
- Transform and manipulate arrays
- Chain array methods
- Solve real-world problems with arrays

---

## 📋 REQUIREMENTS

Create a JavaScript file demonstrating array methods:

1. **Map (Transform Data):**
   - [ ] Create array of numbers
   - [ ] Use `map()` to double each number
   - [ ] Log original and transformed array

2. **Filter (Select Data):**
   - [ ] Create array of student scores
   - [ ] Use `filter()` to get passing scores (>= 60)
   - [ ] Log filtered results

3. **Reduce (Calculate Total):**
   - [ ] Create array of prices
   - [ ] Use `reduce()` to calculate total
   - [ ] Log the total price

4. **Method Chaining:**
   - [ ] Combine map and filter in one chain
   - [ ] Example: Get doubled values of numbers > 5

---

## 💻 STARTER HINTS

```javascript
// Map example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// Filter example
const scores = [45, 78, 92, 55, 88];
const passing = scores.filter(score => score >= 60);

// Reduce example
const prices = [10, 20, 30];
const total = prices.reduce((sum, price) => sum + price, 0);
```

---

## 📤 SUBMISSION

1. Create `array-methods.js` in the `LAB-06/code/` folder
2. Complete all requirements
3. Test with different arrays
4. Commit and push to GitHub
5. Check off items in `submission.md`
