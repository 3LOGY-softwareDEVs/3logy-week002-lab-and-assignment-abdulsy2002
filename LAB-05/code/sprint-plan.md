# 📚 Sprint Plan: Library Management System

## 1. User Stories

### Story 1: Book Search
**As a library member, I want to search for books by title, author, or genre, so that I can quickly find the book I need.**

- **Acceptance Criteria:**
  - User can enter keywords in a search bar.
  - System returns relevant results with title, author, and availability status.
  - Search results update dynamically.

- **Priority:** Must Have  
- **Story Points:** 5 (Moderate complexity: requires indexing and filtering logic)

---

### Story 2: Borrow Books
**As a library member, I want to borrow available books, so that I can read them at home.**

- **Acceptance Criteria:**
  - User can click "Borrow" on available books.
  - System updates book status to "Checked Out."
  - Due date is automatically assigned.

- **Priority:** Must Have  
- **Story Points:** 8 (High complexity: involves inventory updates and due date logic)

---

### Story 3: Return Books
**As a library member, I want to return borrowed books, so that they become available for others.**

- **Acceptance Criteria:**
  - User can mark a book as returned.
  - System updates book status to "Available."
  - Late returns trigger a fine notification.

- **Priority:** Should Have  
- **Story Points:** 5 (Moderate complexity: requires fine calculation logic)

---

### Story 4: User Registration
**As a new user, I want to register for a library account, so that I can borrow and reserve books.**

- **Acceptance Criteria:**
  - Registration form collects name, email, and password.
  - System validates inputs and stores user data securely.
  - Confirmation email is sent.

- **Priority:** Must Have  
- **Story Points:** 3 (Low complexity: standard form validation and database entry)

---

### Story 5: Reserve Books
**As a library member, I want to reserve books that are currently checked out, so that I can borrow them when they are returned.**

- **Acceptance Criteria:**
  - User can click "Reserve" on unavailable books.
  - System places user in a reservation queue.
  - Notification is sent when the book becomes available.

- **Priority:** Should Have  
- **Story Points:** 5 (Moderate complexity: requires queue management and notifications)

---

### Story 6: Admin Dashboard
**As a librarian, I want an admin dashboard to manage books and users, so that I can oversee library operations.**

- **Acceptance Criteria:**
  - Admin can add, edit, or remove books.
  - Admin can view user activity (borrowed, reserved, overdue).
  - Dashboard displays system statistics.

- **Priority:** Could Have  
- **Story Points:** 8 (High complexity: multiple CRUD operations and analytics)

---

## 2. MoSCoW Prioritization

| Story | Feature | Priority |
|-------|----------|----------|
| 1 | Book Search | Must Have |
| 2 | Borrow Books | Must Have |
| 3 | Return Books | Should Have |
| 4 | User Registration | Must Have |
| 5 | Reserve Books | Should Have |
| 6 | Admin Dashboard | Could Have |

---

## 3. Story Point Estimation & Sprint Capacity

| Story | Points | Justification |
|-------|--------|---------------|
| 1 | 5 | Search requires indexing and filtering logic. |
| 2 | 8 | Borrowing involves inventory updates and due date logic. |
| 3 | 5 | Return requires fine calculation logic. |
| 4 | 3 | Registration is straightforward with form validation. |
| 5 | 5 | Reservation requires queue management and notifications. |
| 6 | 8 | Admin dashboard involves CRUD operations and analytics. |

**Total Points = 34**  
**Sprint Capacity = 20–25 points**

👉 Selected for Sprint:  
- Story 1 (5)  
- Story 2 (8)  
- Story 3 (5)  
- Story 4 (3)  

**Total Sprint Load = 21 points (within capacity)**

---

## 4. Sprint Goal
Deliver core functionality for library members: searching, registering, borrowing, and returning books. This ensures the system is usable by end-users while laying the foundation for advanced features in future sprints.