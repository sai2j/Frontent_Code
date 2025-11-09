/*const profile = {
  name: "Alice Johnson",
  age: 30,
  email: "alice.johnson@example.com",
};
console.log(profile);

const profile2 = {
  name: "Bob Williams",
  age: 24,
  email: "bob.w@email.net",
};
console.log(`Name:${profile2.name},Age:${profile2.age},Email:${profile2.email}`)
*/
/*
const item = {
  name: "Wireless Headphones",
  price: '$79.99',
  inStock: "false"
};
if (item.inStock == 'true') {
  item.inStock = "yes";
} else {
  item.inStock = "No";
}
console.log(item)
*/

/*
const book = {
  title: "The Great Gatsby",
  isbn: "978-0743273565",
  publicationYear: 1925,
  author: {
    authorName: "F. Scott Fitzgerald",
    nationality: "American",
  }
};

console.log(`Book:${book.title}, Author:${book.author.authorName}, Published" ${book.publicationYear} (${book.author.nationality} author)"`)
// console.log(book)
*/

const user = {
  darkMode: "false",
  emailNotifications: "false",
  locale: "en-US",
  smsNotifications:"true"
};

// delete user.emailNotifications
if (user.emailNotifications == "false") {
  delete user.emailNotifications;
  
}
if (user.smsNotifications == "true") {
  delete user.smsNotifications
}

console.log(user);
