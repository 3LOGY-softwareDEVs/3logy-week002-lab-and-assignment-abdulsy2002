// Product list
const products = [
  { name: "Laptop", category: "Electronics", price: 999, inStock: true },
  { name: "Phone", category: "Electronics", price: 599, inStock: true },
  { name: "Shirt", category: "Clothing", price: 29, inStock: true },
  { name: "Shoes", category: "Clothing", price: 79, inStock: false },
  { name: "Novel", category: "Books", price: 15, inStock: true }
];


// =======================
// FILTER FUNCTIONS
// =======================

// Filter by category
function filterByCategory(category) {
  return products.filter(product => product.category === category);
}

// Filter by price range
function filterByPrice(min, max) {
  return products.filter(
    product => product.price >= min && product.price <= max
  );
}

// Filter in-stock products
function filterInStock() {
  return products.filter(product => product.inStock);
}


// =======================
// SORTING FUNCTIONS
// =======================

function sortByPrice(ascending = true) {
  return [...products].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
}


// =======================
// DISPLAY FUNCTION
// =======================

function displayProducts(productList) {
  productList.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - $${product.price}`);
  });
}


// =======================
// TESTING
// =======================

console.log("Electronics:");
displayProducts(filterByCategory("Electronics"));

console.log("\nPrice Range $0-$100:");
displayProducts(filterByPrice(0, 100));

console.log("\nIn Stock:");
displayProducts(filterInStock());

console.log("\nSorted Low to High:");
displayProducts(sortByPrice(true));

console.log("\nSorted High to Low:");
displayProducts(sortByPrice(false));