# TICKET-06: Task List Manager

**Priority:** Must Have  
**Story Points:** 5  
**Points:** 4  
**Due:** Tuesday Week 2, End of Class

---

## 📝 USER STORY

```
As a user,
I want to manage my tasks,
So that I can track what needs to be done.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Create array of task objects
- [ ] Each task has: id, title, completed status
- [ ] Function to add new task
- [ ] Function to mark task as complete
- [ ] Function to display all tasks
- [ ] Function to display only incomplete tasks
- [ ] Test all functions

---

## 📋 REQUIREMENTS

1. **Task Structure:**
   ```javascript
   {
     id: 1,
     title: "Complete LAB-06",
     completed: false
   }
   ```

2. **Required Functions:**
   - `addTask(title)` - adds new task to array
   - `completeTask(id)` - marks task as complete
   - `displayAllTasks()` - logs all tasks
   - `displayIncompleteTasks()` - logs only incomplete tasks

3. **Testing:**
   - Add at least 3 tasks
   - Mark 1 task complete
   - Display all tasks
   - Display incomplete tasks

---

## 💻 STARTER TEMPLATE

```javascript
let tasks = [];
let nextId = 1;

function addTask(title) {
  const task = {
    id: nextId++,
    title: title,
    completed: false
  };
  tasks.push(task);
  console.log(`Added: ${title}`);
}

function completeTask(id) {
  // Your code here
  // Find task by id and set completed = true
}

function displayAllTasks() {
  // Your code here
  // Loop through tasks and log each one
}

function displayIncompleteTasks() {
  // Your code here
  // Filter incomplete tasks and log them
}

// Test your functions
addTask("Complete LAB-06");
addTask("Read JavaScript docs");
addTask("Practice array methods");

completeTask(1);

displayAllTasks();
displayIncompleteTasks();
```

---

## 📤 SUBMISSION

1. Create `task-manager.js` in the `TICKET-06/code/` folder
2. Complete all acceptance criteria
3. Test all functions
4. Commit and push to GitHub
5. Check off items in `submission.md`
