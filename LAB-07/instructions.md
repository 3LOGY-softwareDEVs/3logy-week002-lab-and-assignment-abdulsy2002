# LAB-07: Working with Objects

**Duration:** 35 minutes  
**Points:** 4  
**Due:** Wednesday Week 2, End of Class

---

## 🎯 LEARNING OBJECTIVES

- Create and manipulate objects
- Access object properties
- Add methods to objects
- Work with nested objects

---

## 📋 REQUIREMENTS

Create a JavaScript file working with objects:

1. **Create Student Object:**
   - [ ] Properties: name, age, grade, courses (array)
   - [ ] Log the complete object

2. **Access Properties:**
   - [ ] Access using dot notation
   - [ ] Access using bracket notation
   - [ ] Log specific properties

3. **Add Method:**
   - [ ] Add a method `getInfo()` that returns student summary
   - [ ] Call the method and log result

4. **Modify Object:**
   - [ ] Update existing property
   - [ ] Add new property
   - [ ] Remove a property (using delete)

---

## 💻 STARTER TEMPLATE

```javascript
// Create object
const student = {
  name: "Alice Johnson",
  age: 20,
  grade: "A",
  courses: ["Math", "Science", "English"],
  
  // Add method
  getInfo: function() {
    return `${this.name} is ${this.age} years old, Grade: ${this.grade}`;
  }
};

// Access properties
console.log(student.name);  // Dot notation
console.log(student["age"]); // Bracket notation

// Call method
console.log(student.getInfo());
```

---

## 📤 SUBMISSION

1. Create `objects.js` in the `LAB-07/code/` folder
2. Complete all requirements
3. Test all object operations
4. Commit and push to GitHub
5. Check off items in `submission.md`
