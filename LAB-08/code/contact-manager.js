// Contact storage
const contacts = [];

/* =========================
   VALIDATION FUNCTIONS
   ========================= */

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^[0-9]{10,15}$/;
  return regex.test(phone);
}

/* =========================
   ADD CONTACT
   ========================= */

function addContact(name, phone, email, address) {
  if (!isValidPhone(phone)) {
    console.log("Invalid phone number.");
    return;
  }

  if (!isValidEmail(email)) {
    console.log("Invalid email address.");
    return;
  }

  const contact = { name, phone, email, address };
  contacts.push(contact);

  console.log("Contact added successfully.");
}

/* =========================
   VIEW ALL CONTACTS
   ========================= */

function viewAllContacts() {
  if (contacts.length === 0) {
    console.log("No contacts available.");
    return;
  }

  // Sort alphabetically
  const sorted = contacts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  console.log("\n--- Contact List ---");

  sorted.forEach((contact, index) => {
    console.log(
      `${index + 1}. ${contact.name}
Phone: ${contact.phone}
Email: ${contact.email}
Address: ${contact.address}
-----------------------`
    );
  });
}

/* =========================
   SEARCH BY NAME
   ========================= */

function searchByName(name) {
  const results = contacts.filter(contact =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );

  if (results.length === 0) {
    console.log("No contact found.");
    return;
  }

  console.log("Search results:");
  console.log(results);
}

/* =========================
   SEARCH BY PHONE
   ========================= */

function searchByPhone(phone) {
  const result = contacts.find(contact => contact.phone === phone);

  if (!result) {
    console.log("No contact found.");
    return;
  }

  console.log("Contact found:");
  console.log(result);
}

/* =========================
   UPDATE CONTACT
   ========================= */

function updateContact(phone, newData) {
  const contact = contacts.find(c => c.phone === phone);

  if (!contact) {
    console.log("Contact not found.");
    return;
  }

  Object.assign(contact, newData);

  console.log("Contact updated successfully.");
}

/* =========================
   DELETE CONTACT
   ========================= */

function deleteContact(phone) {
  const index = contacts.findIndex(c => c.phone === phone);

  if (index === -1) {
    console.log("Contact not found.");
    return;
  }

  contacts.splice(index, 1);

  console.log("Contact deleted successfully.");
}

/* =========================
   TESTING THE SYSTEM
   ========================= */

addContact("Alice Johnson", "08012345678", "alice@email.com", "Abuja");
addContact("Bob Smith", "08123456789", "bob@email.com", "Lagos");

viewAllContacts();

searchByName("Alice");

searchByPhone("08123456789");

updateContact("08123456789", {
  email: "newbob@email.com",
  address: "Kano"
});

deleteContact("08012345678");

viewAllContacts();