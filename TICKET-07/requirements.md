# TICKET-07: Student Records System

**Priority:** Must Have  
**Story Points:** 5  
**Points:** 4  
**Due:** Wednesday Week 2, End of Class

---

## 📝 USER STORY

```
As a teacher,
I want to manage student records,
So that I can track student information and grades.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Create array of student objects
- [ ] Each student has: id, name, age, grades (array), gpa
- [ ] Function to add new student
- [ ] Function to calculate GPA
- [ ] Function to find student by id
- [ ] Function to get honor roll students (GPA >= 3.5)
- [ ] Test all functions

---

## 📋 REQUIREMENTS

1. **Student Structure:**
   ```javascript
   {
     id: 1,
     name: "Alice Johnson",
     age: 20,
     grades: [85, 92, 78, 95],
     gpa: 0  // Will be calculated
   }
   ```

2. **Required Functions:**
   - `addStudent(name, age, grades)` - adds student and calculates GPA
   - `calculateGPA(grades)` - converts grades to 4.0 scale
   - `findStudent(id)` - returns student object
   - `getHonorRoll()` - returns students with GPA >= 3.5

3. **GPA Calculation:**
   - 90-100 = 4.0
   - 80-89 = 3.0
   - 70-79 = 2.0
   - 60-69 = 1.0
   - Below 60 = 0.0

---

## 💻 EXAMPLE OUTPUT

```
Students:
1. Alice Johnson (Age 20) - GPA: 3.5
2. Bob Smith (Age 21) - GPA: 3.8
3. Carol Davis (Age 19) - GPA: 2.5

Honor Roll Students:
- Alice Johnson (GPA: 3.5)
- Bob Smith (GPA: 3.8)

Found Student: Alice Johnson
```

---

## 🧪 TESTING

Create at least 3 students with different GPAs:
- [ ] One honor roll student (GPA >= 3.5)
- [ ] One regular student (GPA < 3.5)
- [ ] Test findStudent() with valid id
- [ ] Test getHonorRoll() returns correct students

---

## 📤 SUBMISSION

1. Create `student-records.js` in the `TICKET-07/code/` folder
2. Complete all acceptance criteria
3. Test with at least 3 students
4. Commit and push to GitHub
5. Check off items in `submission.md`
