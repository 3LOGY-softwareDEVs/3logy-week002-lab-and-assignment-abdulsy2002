// ==============================
// ARRAY CHALLENGES
// ==============================

// 1. Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 2. Second largest number
function secondLargest(numbers) {
  const unique = [...new Set(numbers)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

// 3. Rotate array by N positions
function rotateArray(arr, n) {
  const length = arr.length;
  const pos = n % length;
  return [...arr.slice(pos), ...arr.slice(0, pos)];
}

// 4. Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// 5. Group array items by property
function groupByProperty(arr, prop) {
  return arr.reduce((group, item) => {
    const key = item[prop];
    if (!group[key]) group[key] = [];
    group[key].push(item);
    return group;
  }, {});
}


// ==============================
// OBJECT / DICTIONARY CHALLENGES
// ==============================

// 6. Count character frequency
function charFrequency(str) {
  const result = {};

  for (let char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

// 7. Merge two objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 8. Convert array to object
function arrayToObject(arr) {
  const obj = {};

  arr.forEach((item, index) => {
    obj[index] = item;
  });

  return obj;
}

// 9. Most common word
function mostCommonWord(text) {
  const words = text.toLowerCase().split(/\W+/);
  const count = {};

  words.forEach(word => {
    count[word] = (count[word] || 0) + 1;
  });

  let maxWord = "";
  let maxCount = 0;

  for (let word in count) {
    if (count[word] > maxCount) {
      maxCount = count[word];
      maxWord = word;
    }
  }

  return maxWord;
}

// 10. Group students by grade
function groupStudentsByGrade(students) {
  return students.reduce((group, student) => {
    const grade = student.grade;

    if (!group[grade]) group[grade] = [];
    group[grade].push(student);

    return group;
  }, {});
}


// ==============================
// SET CHALLENGES
// ==============================

// 11. Intersection
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

// 12. Union
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// 13. Difference
function difference(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}


// ==============================
// MIXED CHALLENGES
// ==============================

// 14. Basic phone book
const phoneBook = [];

function addContact(name, phone) {
  phoneBook.push({ name, phone });
}

function findContact(name) {
  return phoneBook.find(contact => contact.name === name);
}

// 15. Shopping cart
const shoppingCart = {
  items: {},

  addItem(product, quantity) {
    this.items[product] = (this.items[product] || 0) + quantity;
  },

  removeItem(product) {
    delete this.items[product];
  },

  viewCart() {
    console.log(this.items);
  }
};


// ==============================
// TEST CASES
// ==============================

console.log(removeDuplicates([1,2,2,3,3,4]));
console.log(secondLargest([10,5,8,20,15]));
console.log(rotateArray([1,2,3,4,5], 2));
console.log(flattenArray([1,[2,[3,4]],5]));

console.log(charFrequency("hello"));
console.log(mergeObjects({a:1}, {b:2}));
console.log(arrayToObject(["a","b","c"]));

console.log(intersection([1,2,3],[2,3,4]));
console.log(union([1,2],[2,3]));
console.log(difference([1,2,3],[2]));

addContact("Alice", "08012345678");
console.log(findContact("Alice"));

shoppingCart.addItem("Laptop", 1);
shoppingCart.addItem("Phone", 2);
shoppingCart.viewCart();