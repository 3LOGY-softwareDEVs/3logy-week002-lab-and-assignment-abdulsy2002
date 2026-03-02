# TICKET-08: Filter and Sort Products

**Priority:** Must Have  
**Story Points:** 5  
**Points:** 4  
**Due:** Thursday Week 2, End of Class

---

## 📝 USER STORY

```
As a shopper,
I want to filter and sort products,
So that I can find items that match my criteria.
```

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Create array of product objects
- [ ] Each product has: id, name, price, category, inStock
- [ ] Function to filter by category
- [ ] Function to filter by price range
- [ ] Function to filter in-stock items
- [ ] Function to sort by price (low to high, high to low)
- [ ] Test all functions with sample data

---

## 📋 REQUIREMENTS

1. **Product Structure:**
   ```javascript
   {
     id: 1,
     name: "Laptop",
     price: 999,
     category: "Electronics",
     inStock: true
   }
   ```

2. **Required Functions:**
   - `filterByCategory(category)` - returns products in category
   - `filterByPriceRange(min, max)` - returns products in price range
   - `filterInStock()` - returns only available products
   - `sortByPrice(ascending)` - sorts by price (true = low to high)
   - `displayProducts(products)` - nicely formatted product list

3. **Sample Product Data:**
   Create at least 5 products in different categories:
   - Electronics (Laptop, Phone)
   - Clothing (Shirt, Shoes)
   - Books (Novel)

---

## 💻 EXAMPLE OUTPUT

```
All Products:
1. Laptop - $999 (Electronics) - In Stock
2. Phone - $599 (Electronics) - In Stock
3. Shirt - $29 (Clothing) - Out of Stock
4. Shoes - $79 (Clothing) - In Stock
5. Novel - $15 (Books) - In Stock

Electronics:
1. Laptop - $999
2. Phone - $599

Products $0-$100:
1. Shirt - $29
2. Shoes - $79
3. Novel - $15

In Stock Items:
1. Laptop - $999
2. Phone - $599
3. Shoes - $79
4. Novel - $15

Sorted by Price (Low to High):
1. Novel - $15
2. Shirt - $29
3. Shoes - $79
4. Phone - $599
5. Laptop - $999
```

---

## 🧪 TESTING

- [ ] Filter by "Electronics" returns 2 items
- [ ] Filter by price range $0-$100 returns 3 items
- [ ] filterInStock() excludes out-of-stock items
- [ ] Sort ascending puts cheapest first
- [ ] Sort descending puts most expensive first

---

## 💡 HINTS

**Filtering:**
```javascript
function filterByCategory(category) {
  return products.filter(product => product.category === category);
}
```

**Sorting:**
```javascript
function sortByPrice(ascending) {
  return products.sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
}
```

---

## 📤 SUBMISSION

1. Create `product-filter.js` in the `TICKET-08/code/` folder
2. Complete all acceptance criteria
3. Create at least 5 diverse products
4. Test all filter and sort functions
5. Commit and push to GitHub
6. Check off items in `submission.md`
